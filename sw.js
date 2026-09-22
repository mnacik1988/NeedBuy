/* NeedBuy service worker — офлайн-оболочка.
   Стратегия: сеть первым делом, кэш как запасной вариант.
   ВАЖНО: при каждом релизе поднимать CACHE_NAME вместе с APP_VERSION в index.html. */
var CACHE_PREFIX = 'needbuy-';
var CACHE_NAME = CACHE_PREFIX + 'v0.7.4';
var ASSETS = ['./', './index.html', './catalog.js', './icons.js', './manifest.json',
              './icon.png', './icon-maskable.png', './apple-touch-icon.png'];

self.addEventListener('install', function(e){
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_NAME).then(function(c){ return c.addAll(ASSETS); }).catch(function(){}));
});

self.addEventListener('activate', function(e){
  e.waitUntil(caches.keys().then(function(keys){
    // Чистим ТОЛЬКО свои старые кеши. Cache Storage общий на весь origin, а
    // на mnacik1988.github.io живут и другие приложения (Mynado, InveStory
    // и прочие) — раньше отсюда сносились и они, то есть обновление
    // NeedBuy отбирало офлайн у соседей (аудит 2026-09-22; проверено живьём:
    // у Mynado кеш vtodo-shell-*, у InveStory investory-app-*).
    // ⚠️ Старая выкладка /InveStory/ (кеш kapital-*) до сих пор чистит ВСЁ подряд
    // и снесёт наш кеш, если кто-то на неё зайдёт — лечится только там.
    return Promise.all(
      keys.filter(function(k){ return k !== CACHE_NAME && k.indexOf(CACHE_PREFIX) === 0; })
          .map(function(k){ return caches.delete(k); })
    );
  }).then(function(){ return self.clients.claim(); }));
});

self.addEventListener('fetch', function(e){
  if(e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then(function(res){
      var copy = res.clone();
      caches.open(CACHE_NAME).then(function(c){ c.put(e.request, copy); }).catch(function(){});
      return res;
    }).catch(function(){
      return caches.match(e.request).then(function(hit){
        return hit || caches.match('./index.html');
      });
    })
  );
});
