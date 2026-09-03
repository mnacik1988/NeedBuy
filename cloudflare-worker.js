/* =============================================================================
   NeedBuy — серверная часть (Cloudflare Worker)

   Что делает: принимает надиктованную фразу, отдаёт её Claude и возвращает
   разобранный список покупок. Больше ничего — ни задач, ни напоминаний.

   Почему это вообще сервер, а не прямой запрос с телефона:
     1. Ключ Anthropic нельзя класть в приложение. Код на телефоне вскрывается
        за минуту, и платить за чужие запросы будет владелец ключа.
     2. С телефона нельзя честно посчитать лимиты — клиент скажет что угодно.
     3. Сервер сам решает модель и потолок токенов. Что бы клиент ни прислал,
        он не может заказать модель подороже или ответ подлиннее.

   Привязки и секреты (панель Cloudflare → воркер → Settings):
     DB                 — KV namespace (Bindings)
     ANTHROPIC_API_KEY  — секрет, ключ с console.anthropic.com
     SESSION_SECRET     — секрет, случайная строка; понадобится, когда появится
                          вход через Google (сейчас не используется, но пусть
                          лежит — добавлять секрет задним числом хуже)

   ЧЕГО ЗДЕСЬ ПОКА НЕТ: входа через Google. Поэтому личность считается по
   идентификатору устройства, который присылает клиент, — а его можно подделать.
   Защита от этого не в доверии клиенту, а в трёх слоях лимитов (см. ниже):
   даже если кто-то подделает устройство, он упрётся в лимит на IP, а вся
   система целиком — в общий дневной потолок. Когда появится вход, userId
   станет браться из подписанного токена, и слой устройства просто отключится.
   ========================================================================== */

var VERSION = '1.0.1';

/* Модель и потолок ответа решает СЕРВЕР. Клиент на это влиять не может.
   Haiku — самая дешёвая модель; разбор фразы в список это простая задача
   извлечения, тяжёлая модель тут не нужна. Захочешь точнее — поменяй одну
   строку на 'claude-sonnet-5' или 'claude-opus-5'. */
var MODEL = 'claude-haiku-4-5';
var MAX_TOKENS = 1500;

/* Три слоя лимитов. Каждый закрывает дыру в предыдущем:
     DEVICE — честный лимит для честного человека;
     IP     — ловит подделку идентификатора устройства (с одного адреса);
     GLOBAL — потолок расходов на всё приложение, последняя линия обороны.
   Цифры под альфу; когда появятся живые пользователи, поднимем. */
var LIMIT_DEVICE_DAY = 20;
var LIMIT_IP_DAY     = 40;
var LIMIT_GLOBAL_DAY = 400;

/* Длина входа. Разбор списка покупок — это фраза, а не роман.
   Ограничение и от случайной вставки простыни, и от намеренной раскрутки счёта. */
var MAX_INPUT_CHARS = 600;

var ALLOWED_ORIGINS = [
  'https://mnacik1988.github.io',
  'http://localhost:3470',
  'http://127.0.0.1:3470'
];

/* ------------------------------- служебное ------------------------------- */

function corsHeaders(origin) {
  var allow = ALLOWED_ORIGINS.indexOf(origin) >= 0 ? origin : ALLOWED_ORIGINS[0];
  return {
    'Access-Control-Allow-Origin': allow,
    'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, X-Device-Id',
    'Access-Control-Max-Age': '86400',
    'Vary': 'Origin'
  };
}

function json(data, status, origin) {
  return new Response(JSON.stringify(data), {
    status: status || 200,
    headers: Object.assign({ 'content-type': 'application/json; charset=utf-8' }, corsHeaders(origin))
  });
}

function today() {
  return new Date().toISOString().slice(0, 10);   // 2026-09-03
}

/* Счётчик в KV с автоочисткой: ключи живут двое суток и пропадают сами,
   иначе хранилище копило бы мусор за все дни существования приложения. */
async function bump(env, key, limit) {
  var raw = await env.DB.get(key);
  var n = raw ? parseInt(raw, 10) : 0;
  if (isNaN(n)) n = 0;
  if (n >= limit) return { ok: false, used: n, limit: limit };
  await env.DB.put(key, String(n + 1), { expirationTtl: 172800 });
  return { ok: true, used: n + 1, limit: limit };
}

async function peek(env, key) {
  var raw = await env.DB.get(key);
  var n = raw ? parseInt(raw, 10) : 0;
  return isNaN(n) ? 0 : n;
}

/* Идентификатор устройства присылает клиент. Доверия к нему нет — он нужен
   только чтобы РАЗНЫЕ телефоны одного человека не делили лимит. Всё, что
   защищает от подделки, лежит уровнем ниже (IP и общий потолок). */
function deviceId(request) {
  var d = request.headers.get('X-Device-Id') || '';
  d = d.replace(/[^A-Za-z0-9_-]/g, '').slice(0, 64);
  return d || 'anon';
}

function clientIp(request) {
  return request.headers.get('CF-Connecting-IP') || 'unknown';
}

/* --------------------------------- промпт -------------------------------- */

/* Промпт собирает СЕРВЕР. Клиент присылает только текст фразы — он не может
   ни подменить инструкцию, ни попросить модель сделать что-то другое.
   Его текст попадает в отдельное сообщение пользователя, а не в системное. */
function systemPrompt() {
  return [
    'Ты разбираешь фразу человека в список покупок для магазина.',
    'Верни ТОЛЬКО JSON-массив, без пояснений, без markdown, без ```.',
    '',
    'Каждый элемент массива:',
    '{"name": строка, "qty": число или null, "unit": "pc"|"kg"|"g"|"l"|"ml"|"pack", "cat": категория}',
    '',
    'Категории: "fruit" (фрукты), "veg" (овощи), "dairy" (молочное), "bakery" (выпечка),',
    '"meat" (мясо и рыба), "grocery" (бакалея), "drinks" (напитки), "house" (хозтовары), "other" (прочее).',
    '',
    'Правила:',
    '1. name — на языке фразы, как товар назвали бы на ценнике: именительный падеж,',
    '   с большой буквы («Яблоки», «Молоко», «Туалетная бумага»).',
    '2. Количество не выдумывай. Не назвали — qty: null, unit подбери по смыслу товара',
    '   (жидкости — "l", вес — "kg", штучное — "pc").',
    '3. Составные названия не разбивай: «рисовый уксус», «куриное филе» — один товар.',
    '4. Если названо блюдо или повод («продукты на борщ», «что-нибудь к чаю»),',
    '   разверни в конкретные товары, которые за этим стоят.',
    '5. Определение (белый, чёрный, сливочное, охлаждённое) относи к тому товару,',
    '   с которым оно сочетается в жизни. Речь приходит БЕЗ запятых, и определение',
    '   почти всегда стоит перед своим словом:',
    '   «сыр белый хлеб» → «Сыр» и «Белый хлеб» (белым бывает хлеб, а не сыр);',
    '   «молоко сливочное масло» → «Молоко» и «Сливочное масло».',
    '   Определение НИКОГДА не оставляй одиноким пунктом.',
    '6. Приветствия, вежливость и обращения выбрасывай — они не товар.',
    '7. Не больше 30 товаров.',
    '',
    'Если товаров не нашлось, верни [].'
  ].join('\n');
}

/* Модель просили не оборачивать ответ в markdown, но модели иногда всё равно
   это делают. Достаём массив по скобкам, а не надеемся на чистый ответ. */
function extractJsonArray(text) {
  var s = String(text || '').trim();
  var a = s.indexOf('[');
  var b = s.lastIndexOf(']');
  if (a < 0 || b < a) return null;
  try {
    var parsed = JSON.parse(s.slice(a, b + 1));
    return Array.isArray(parsed) ? parsed : null;
  } catch (e) {
    return null;
  }
}

var UNITS = ['pc', 'kg', 'g', 'l', 'ml', 'pack'];
var CATS = ['fruit', 'veg', 'dairy', 'bakery', 'meat', 'grocery', 'drinks', 'house', 'other'];

/* Ответ модели — тоже недоверенный ввод. Она может ошибиться в единице,
   выдумать категорию или вернуть название длиной в абзац. Приводим к своим рамкам. */
function sanitizeItems(arr) {
  var out = [];
  for (var i = 0; i < arr.length && out.length < 30; i++) {
    var it = arr[i];
    if (!it || typeof it !== 'object') continue;
    var name = String(it.name == null ? '' : it.name).trim().slice(0, 60);
    if (!name) continue;
    var qty = null;
    if (typeof it.qty === 'number' && isFinite(it.qty) && it.qty > 0 && it.qty < 10000) {
      qty = Math.round(it.qty * 100) / 100;
    }
    var unit = UNITS.indexOf(it.unit) >= 0 ? it.unit : 'pc';
    var cat = CATS.indexOf(it.cat) >= 0 ? it.cat : 'other';
    out.push({ name: name, qty: qty, unit: unit, cat: cat });
  }
  return out;
}

/* ------------------------------- обработчики ------------------------------ */

async function handleParse(request, env, origin) {
  var body;
  try {
    body = await request.json();
  } catch (e) {
    return json({ error: 'bad_json' }, 400, origin);
  }

  var text = String(body && body.text ? body.text : '').trim();
  if (!text) return json({ error: 'empty' }, 400, origin);
  if (text.length > MAX_INPUT_CHARS) text = text.slice(0, MAX_INPUT_CHARS);

  var day = today();
  var dev = deviceId(request);
  var ip = clientIp(request);

  /* Порядок проверок — от общего к частному: сперва потолок расходов,
     он важнее всего. Считаем ДО запроса к модели: списывать после ответа
     значит платить за запросы, которые уже за лимитом. */
  var g = await bump(env, 'g:' + day, LIMIT_GLOBAL_DAY);
  if (!g.ok) return json({ error: 'busy', message: 'Дневной лимит приложения исчерпан' }, 429, origin);

  var pi = await bump(env, 'ip:' + day + ':' + ip, LIMIT_IP_DAY);
  if (!pi.ok) return json({ error: 'limit', left: 0 }, 429, origin);

  var pd = await bump(env, 'd:' + day + ':' + dev, LIMIT_DEVICE_DAY);
  if (!pd.ok) return json({ error: 'limit', left: 0 }, 429, origin);

  var left = Math.max(0, LIMIT_DEVICE_DAY - pd.used);

  var resp;
  try {
    resp = await fetch('https://api.anthropic.com/v1/messages', {
      method: 'POST',
      headers: {
        'x-api-key': env.ANTHROPIC_API_KEY,
        'anthropic-version': '2023-06-01',
        'content-type': 'application/json'
      },
      /* Собираем тело сами. Из присланного клиентом сюда попадает
         ровно одна строка — текст фразы. Ни модель, ни потолок токенов,
         ни системная инструкция клиенту не подвластны. */
      body: JSON.stringify({
        model: MODEL,
        max_tokens: MAX_TOKENS,
        system: systemPrompt(),
        messages: [{ role: 'user', content: text }]
      })
    });
  } catch (e) {
    return json({ error: 'upstream', message: 'Модель недоступна' }, 502, origin);
  }

  if (!resp.ok) {
    var detail = '';
    try { detail = (await resp.text()).slice(0, 300); } catch (e2) {}
    /* 401 — ключ не тот или не вставлен; 429 — лимит на стороне Anthropic;
       400 — мы прислали кривой запрос. Наружу подробности не отдаём,
       но в логи воркера пишем: без этого отладка вслепую. */
    console.log('anthropic error', resp.status, detail);
    if (resp.status === 401) return json({ error: 'server_key' }, 500, origin);
    if (resp.status === 429) return json({ error: 'busy' }, 429, origin);
    return json({ error: 'upstream', status: resp.status }, 502, origin);
  }

  var data;
  try { data = await resp.json(); } catch (e3) { return json({ error: 'upstream' }, 502, origin); }

  /* Модель может отказаться отвечать — тогда придёт 200 со stop_reason
     "refusal", и content будет пустым. Молча вернуть [] нельзя: человек
     решит, что приложение сломалось. */
  if (data.stop_reason === 'refusal') {
    return json({ error: 'refused', left: left }, 200, origin);
  }

  var textOut = '';
  var content = data.content || [];
  for (var i = 0; i < content.length; i++) {
    if (content[i] && content[i].type === 'text') textOut += content[i].text;
  }

  var arr = extractJsonArray(textOut);
  if (!arr) {
    console.log('parse fail', textOut.slice(0, 300));
    return json({ error: 'unparsed', left: left }, 200, origin);
  }

  return json({
    items: sanitizeItems(arr),
    left: left,
    usage: data.usage ? { in: data.usage.input_tokens, out: data.usage.output_tokens } : null
  }, 200, origin);
}

async function handleLimit(request, env, origin) {
  var day = today();
  var used = await peek(env, 'd:' + day + ':' + deviceId(request));
  return json({
    left: Math.max(0, LIMIT_DEVICE_DAY - used),
    limit: LIMIT_DEVICE_DAY
  }, 200, origin);
}

/* --------------------------------- вход ---------------------------------- */

export default {
  async fetch(request, env) {
    var origin = request.headers.get('Origin') || '';
    var url = new URL(request.url);
    var path = url.pathname.replace(/\/+$/, '') || '/';

    if (request.method === 'OPTIONS') {
      return new Response(null, { status: 204, headers: corsHeaders(origin) });
    }

    /* Проверка «жив ли сервер и всё ли на месте». Открыв адрес воркера в
       браузере, сразу видно, привязано ли хранилище и лежат ли секреты —
       без этого первая же ошибка была бы загадкой. */
    if (path === '/' && request.method === 'GET') {
      return json({
        app: 'NeedBuy',
        version: VERSION,
        model: MODEL,
        kv: !!env.DB,
        key: !!env.ANTHROPIC_API_KEY,
        secret: !!env.SESSION_SECRET
      }, 200, origin);
    }

    if (path === '/ai/parse' && request.method === 'POST') return handleParse(request, env, origin);
    if (path === '/limit' && request.method === 'GET') return handleLimit(request, env, origin);

    return json({ error: 'not_found' }, 404, origin);
  }
};
