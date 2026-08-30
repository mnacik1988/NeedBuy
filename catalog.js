/* NeedBuy — каталог товаров.
   Задача файла: по написанному/сказанному слову понять, ЧТО это за товар,
   к какой полке магазина относится и какую картинку показать.

   Матчинг по ОСНОВЕ слова (stem), а не по целому слову — русский, украинский,
   немецкий и французский склоняют: «яблок», «яблоки», «яблоками» → один stem 'яблок'.
   Правило: слово подходит, если начинается с основы.
*/
(function(g){

var CATS = {
  fruit:   { icon:'cat_fruit',   order:1, ru:'Фрукты',    en:'Fruit',      uk:'Фрукти',     de:'Obst',        fr:'Fruits' },
  veg:     { icon:'cat_veg',     order:2, ru:'Овощи',     en:'Vegetables', uk:'Овочі',      de:'Gemüse',      fr:'Légumes' },
  dairy:   { icon:'cat_dairy',   order:3, ru:'Молочное',  en:'Dairy',      uk:'Молочне',    de:'Milchwaren',  fr:'Laitier' },
  bakery:  { icon:'cat_bakery',  order:4, ru:'Выпечка',   en:'Bakery',     uk:'Випічка',    de:'Backwaren',   fr:'Boulangerie' },
  meat:    { icon:'cat_meat',    order:5, ru:'Мясо и рыба', en:'Meat & fish', uk:'М’ясо і риба', de:'Fleisch & Fisch', fr:'Viande & poisson' },
  grocery: { icon:'cat_grocery', order:6, ru:'Бакалея',   en:'Grocery',    uk:'Бакалія',    de:'Trockenwaren',fr:'Épicerie' },
  drinks:  { icon:'cat_drinks',  order:7, ru:'Напитки',   en:'Drinks',     uk:'Напої',      de:'Getränke',    fr:'Boissons' },
  house:   { icon:'cat_house',   order:8, ru:'Хозтовары', en:'Household',  uk:'Господарче', de:'Haushalt',    fr:'Maison' },
  other:   { icon:'cat_other',   order:9, ru:'Другое',    en:'Other',      uk:'Інше',       de:'Sonstiges',   fr:'Autre' }
};

/* [ключ_иконки, категория, единица по умолчанию, {язык: [основы]}] */
var P = [
/* --- фрукты --- */
['apple','fruit','kg',{ru:['яблок','яблоч'],en:['apple'],uk:['яблук','яблуч'],de:['apfel','äpfel'],fr:['pomme']}],
['pear','fruit','kg',{ru:['груш'],en:['pear'],uk:['груш'],de:['birne'],fr:['poire']}],
['banana','fruit','kg',{ru:['банан'],en:['banana'],uk:['банан'],de:['banane'],fr:['banane']}],
['orange','fruit','kg',{ru:['апельсин','мандарин'],en:['orange','tangerine','mandarin'],uk:['апельсин','мандарин'],de:['orange','mandarine'],fr:['orange','mandarine']}],
['lemon','fruit','pc',{ru:['лимон','лайм'],en:['lemon','lime'],uk:['лимон','лайм'],de:['zitrone','limette'],fr:['citron']}],
['grapes','fruit','kg',{ru:['виноград'],en:['grape'],uk:['виноград'],de:['traube','trauben'],fr:['raisin']}],
['strawberry','fruit','kg',{ru:['клубник','земляник'],en:['strawberr'],uk:['полуниц'],de:['erdbeer'],fr:['fraise']}],
['watermelon','fruit','pc',{ru:['арбуз','дын'],en:['watermelon','melon'],uk:['кавун','дин'],de:['wassermelone','melone'],fr:['pastèque','melon']}],
['peach','fruit','kg',{ru:['персик','нектарин','абрикос'],en:['peach','nectarine','apricot'],uk:['персик','абрикос'],de:['pfirsich','aprikose'],fr:['pêche','abricot']}],
/* --- овощи --- */
['tomato','veg','kg',{ru:['помидор','томат'],en:['tomato'],uk:['помідор','томат'],de:['tomate'],fr:['tomate']}],
['cucumber','veg','kg',{ru:['огурц','огурч','огурек'],en:['cucumber'],uk:['огірк'],de:['gurke'],fr:['concombre']}],
['potato','veg','kg',{ru:['картоф','картош'],en:['potato'],uk:['картопл'],de:['kartoffel'],fr:['pomme de terre','patate']}],
['carrot','veg','kg',{ru:['морков'],en:['carrot'],uk:['моркв'],de:['karotte','möhre'],fr:['carotte']}],
['onion','veg','kg',{ru:['лук'],en:['onion'],uk:['цибул'],de:['zwiebel'],fr:['oignon']}],
['garlic','veg','pc',{ru:['чеснок','чесноч'],en:['garlic'],uk:['часник'],de:['knoblauch'],fr:['ail']}],
['pepper','veg','kg',{ru:['перец','перц'],en:['pepper'],uk:['перец','перц'],de:['paprika'],fr:['poivron']}],
['cabbage','veg','pc',{ru:['капуст'],en:['cabbage'],uk:['капуст'],de:['kohl'],fr:['chou']}],
['avocado','veg','pc',{ru:['авокадо'],en:['avocado'],uk:['авокадо'],de:['avocado'],fr:['avocat']}],
['mushroom','veg','kg',{ru:['гриб','шампиньон'],en:['mushroom'],uk:['гриб','печериц'],de:['pilz','champignon'],fr:['champignon']}],
['corn','veg','pc',{ru:['кукуруз'],en:['corn','maize'],uk:['кукурудз'],de:['mais'],fr:['maïs']}],
['broccoli','veg','pc',{ru:['брокколи','брокол','цветная капуст'],en:['broccoli','cauliflower'],uk:['броколі'],de:['brokkoli'],fr:['brocoli']}],
/* --- молочное --- */
['milk','dairy','l',{ru:['молок','молоч'],en:['milk'],uk:['молок'],de:['milch'],fr:['lait']}],
['cheese','dairy','kg',{ru:['сыр'],en:['cheese'],uk:['сир'],de:['käse'],fr:['fromage']}],
['butter','dairy','pc',{ru:['масл'],en:['butter'],uk:['масл'],de:['butter'],fr:['beurre']}],
['yogurt','dairy','pc',{ru:['йогурт'],en:['yog'],uk:['йогурт'],de:['joghurt'],fr:['yaourt']}],
['eggs','dairy','pc',{ru:['яйц','яиц'],en:['egg'],uk:['яйц','яєц'],de:['ei','eier'],fr:['oeuf','œuf']}],
['sourcream','dairy','pc',{ru:['сметан','творог','творож','кефир','ряженк'],en:['sour cream','cottage cheese','kefir'],uk:['сметан','сир кисломолочн','кефір'],de:['sahne','quark','kefir'],fr:['crème','fromage blanc']}],
/* --- выпечка --- */
['bread','bakery','pc',{ru:['хлеб','батон','буханк'],en:['bread','loaf'],uk:['хліб','батон'],de:['brot'],fr:['pain']}],
['baguette','bakery','pc',{ru:['багет'],en:['baguette'],uk:['багет'],de:['baguette'],fr:['baguette']}],
['croissant','bakery','pc',{ru:['круассан','булочк','булк'],en:['croissant','bun'],uk:['круасан','булочк'],de:['croissant','brötchen'],fr:['croissant','brioche']}],
['cake','bakery','pc',{ru:['торт','пирожн','кекс'],en:['cake','pastry'],uk:['торт','тістечк'],de:['kuchen','torte'],fr:['gâteau','tarte']}],
['cookies','bakery','pc',{ru:['печен','вафл','пряник'],en:['cookie','biscuit','waffle'],uk:['печив','вафл'],de:['keks','waffel'],fr:['biscuit','gaufre']}],
/* --- мясо и рыба --- */
['chicken','meat','kg',{ru:['куриц','куриц','курин','кур','окорочк'],en:['chicken'],uk:['куриц','курк','курин'],de:['hähnchen','huhn'],fr:['poulet']}],
['meat','meat','kg',{ru:['мяс','говядин','свинин','фарш','стейк','котлет'],en:['meat','beef','pork','mince','steak'],uk:['м’яс','мяс','яловичин','свинин','фарш'],de:['fleisch','rind','schwein','hack'],fr:['viande','boeuf','porc']}],
['sausage','meat','kg',{ru:['колбас','сосиск','сардельк'],en:['sausage','hot dog'],uk:['ковбас','сосиск'],de:['wurst','würstchen'],fr:['saucisse','saucisson']}],
['fish','meat','kg',{ru:['рыб','лосос','селёдк','селедк','форел','тунец'],en:['fish','salmon','tuna','herring'],uk:['риб','лосос','оселедц'],de:['fisch','lachs','thunfisch'],fr:['poisson','saumon','thon']}],
['bacon','meat','pc',{ru:['бекон','ветчин','сал'],en:['bacon','ham'],uk:['бекон','шинк','сал'],de:['speck','schinken'],fr:['bacon','jambon']}],
/* --- бакалея --- */
['rice','grocery','kg',{ru:['рис','гречк','греч','крупа','пшён','пшен','булгур','кускус'],en:['rice','buckwheat','groats','bulgur','couscous'],uk:['рис','гречк','крупа'],de:['reis','buchweizen','grütze'],fr:['riz','sarrasin']}],
['pasta','grocery','pc',{ru:['макарон','паст','спагетт','вермишел','лапш'],en:['pasta','spaghetti','noodle','macaroni'],uk:['макарон','спагет','локшин'],de:['nudel','pasta','spaghetti'],fr:['pâtes','spaghetti','nouille']}],
['flour','grocery','kg',{ru:['мук'],en:['flour'],uk:['борошн'],de:['mehl'],fr:['farine']}],
['sugar','grocery','kg',{ru:['сахар','сахарн'],en:['sugar'],uk:['цукор','цукр'],de:['zucker'],fr:['sucre']}],
['salt','grocery','pc',{ru:['сол','специ','приправ','перец молот'],en:['salt','spice','seasoning'],uk:['сіл','спеці','приправ'],de:['salz','gewürz'],fr:['sel','épice']}],
['oil','grocery','l',{ru:['подсолнечн','оливков','растительн масл'],en:['oil','olive oil'],uk:['олі','соняшников'],de:['öl'],fr:['huile']}],
['coffee','grocery','pc',{ru:['кофе'],en:['coffee'],uk:['кав'],de:['kaffee'],fr:['café']}],
['tea','grocery','pc',{ru:['чай','чая','чаю'],en:['tea'],uk:['чай','чаю'],de:['tee'],fr:['thé']}],
['chocolate','grocery','pc',{ru:['шоколад','конфет'],en:['chocolate','candy','sweets'],uk:['шоколад','цукерк'],de:['schokolade','bonbon'],fr:['chocolat','bonbon']}],
['honey','grocery','pc',{ru:['мёд','мед '],en:['honey'],uk:['мед'],de:['honig'],fr:['miel']}],
['jam','grocery','pc',{ru:['варень','джем','повидл'],en:['jam','marmalade'],uk:['варенн','джем'],de:['marmelade','konfitüre'],fr:['confiture']}],
['cereal','grocery','pc',{ru:['хлопь','мюсл','овсянк','каш'],en:['cereal','muesli','oatmeal','porridge'],uk:['пластівц','мюсл','вівсянк'],de:['müsli','haferflocken'],fr:['céréales','muesli','flocons']}],
['nuts','grocery','kg',{ru:['орех','арахис','миндал','фундук','семечк'],en:['nut','peanut','almond','walnut'],uk:['горіх','арахіс','мигдал'],de:['nuss','nüsse','mandel','erdnuss'],fr:['noix','amande','cacahuète']}],
/* --- напитки --- */
['water','drinks','l',{ru:['вод'],en:['water'],uk:['вод'],de:['wasser'],fr:['eau']}],
['juice','drinks','l',{ru:['сок','нектар','морс'],en:['juice'],uk:['сік','соку'],de:['saft'],fr:['jus']}],
['soda','drinks','l',{ru:['газиров','кол','лимонад','спрайт','фант'],en:['soda','cola','lemonade'],uk:['газован','кол','лимонад'],de:['limonade','cola'],fr:['soda','cola','limonade']}],
['beer','drinks','pc',{ru:['пив'],en:['beer'],uk:['пив'],de:['bier'],fr:['bière']}],
['wine','drinks','pc',{ru:['вин','шампанск','игрист'],en:['wine','champagne'],uk:['вин','шампанськ'],de:['wein','sekt'],fr:['vin','champagne']}],
/* --- хозтовары --- */
['toiletpaper','house','pc',{ru:['туалетн бумаг','туалетную бумаг','бумаг туалет'],en:['toilet paper'],uk:['туалетн папір'],de:['toilettenpapier','klopapier'],fr:['papier toilette']}],
['papertowel','house','pc',{ru:['полотенц бумажн','бумажн полотенц','салфетк'],en:['paper towel','napkin'],uk:['паперов рушник','серветк'],de:['küchenrolle','servietten'],fr:['essuie-tout','serviette']}],
['soap','house','pc',{ru:['мыл'],en:['soap'],uk:['мил'],de:['seife'],fr:['savon']}],
['shampoo','house','pc',{ru:['шампун','бальзам для волос','кондиционер для волос'],en:['shampoo','conditioner'],uk:['шампун'],de:['shampoo'],fr:['shampooing']}],
['toothpaste','house','pc',{ru:['зубн паст','зубную паст','зубн щётк','зубн щетк'],en:['toothpaste','toothbrush'],uk:['зубн паст','зубн щітк'],de:['zahnpasta','zahnbürste'],fr:['dentifrice','brosse à dents']}],
['detergent','house','pc',{ru:['порошок','гель для стирк','средств для мыть','моющ','кондиционер для бель','отбеливател'],en:['detergent','washing powder','cleaner','bleach'],uk:['порошок','засіб для мытт','мийн'],de:['waschmittel','spülmittel','reiniger'],fr:['lessive','liquide vaisselle','nettoyant']}],
['sponge','house','pc',{ru:['губк','тряпк','мочалк'],en:['sponge','cloth'],uk:['губк','ганчірк'],de:['schwamm','lappen'],fr:['éponge','chiffon']}],
['trashbag','house','pc',{ru:['мусорн пакет','пакет для мусор','мешк для мусор'],en:['trash bag','garbage bag','bin liner'],uk:['сміттєв пакет'],de:['müllbeutel','müllsack'],fr:['sac poubelle']}],
/* --- прочее --- */
['diapers','other','pc',{ru:['подгузник','памперс'],en:['diaper','nappy'],uk:['підгузк','памперс'],de:['windel'],fr:['couche']}],
['petfood','other','pc',{ru:['корм'],en:['pet food','cat food','dog food'],uk:['корм'],de:['tierfutter','katzenfutter','hundefutter'],fr:['croquettes','nourriture chat','nourriture chien']}],
['battery','other','pc',{ru:['батарейк','аккумулятор'],en:['batter'],uk:['батарейк'],de:['batterie'],fr:['pile']}],
['bulb','other','pc',{ru:['лампочк','лампа'],en:['bulb','lamp'],uk:['лампочк','лампа'],de:['glühbirne','lampe'],fr:['ampoule']}],
['medicine','other','pc',{ru:['лекарств','таблетк','витамин','пластыр','бинт'],en:['medicine','pill','vitamin','plaster','bandage'],uk:['ліки','таблетк','вітамін'],de:['medikament','tablette','vitamin','pflaster'],fr:['médicament','vitamine','pansement']}]
];

/* Единицы измерения на 5 языках */
var UNITS = {
  pc: {ru:'шт', en:'pcs', uk:'шт', de:'St', fr:'pc'},
  kg: {ru:'кг', en:'kg',  uk:'кг', de:'kg', fr:'kg'},
  g:  {ru:'г',  en:'g',   uk:'г',  de:'g',  fr:'g'},
  l:  {ru:'л',  en:'l',   uk:'л',  de:'l',  fr:'l'},
  ml: {ru:'мл', en:'ml',  uk:'мл', de:'ml', fr:'ml'},
  pack:{ru:'уп',en:'pack',uk:'уп', de:'Pck',fr:'paq'}
};

/* Как единицы могут прозвучать во фразе */
var UNIT_WORDS = {
  pc:  ['шт','штук','штуки','штука','pcs','pc','pieces','piece','stück','pièce','pièces'],
  kg:  ['кг','килограмм','килограмма','килограммов','kg','kilo','kilos','kilogram'],
  g:   ['г','гр','грамм','грамма','граммов','g','gram','grams','gramm'],
  l:   ['л','литр','литра','литров','l','liter','litre','litres','liters'],
  ml:  ['мл','миллилитр','ml','milliliter'],
  pack:['уп','упаковк','упаковка','упаковки','пачк','пачка','пачки','pack','packs','packung','paquet']
};

/* Как товар называется на витрине. Порядок: ru, en, uk, de, fr.
   Нужно, чтобы плитка показывала «Яблоки», а не обрубок основы «Яблок». */
var TITLES = {
apple:['Яблоки','Apples','Яблука','Äpfel','Pommes'],
pear:['Груши','Pears','Груші','Birnen','Poires'],
banana:['Бананы','Bananas','Банани','Bananen','Bananes'],
orange:['Апельсины','Oranges','Апельсини','Orangen','Oranges'],
lemon:['Лимон','Lemon','Лимон','Zitrone','Citron'],
grapes:['Виноград','Grapes','Виноград','Trauben','Raisin'],
strawberry:['Клубника','Strawberries','Полуниця','Erdbeeren','Fraises'],
watermelon:['Арбуз','Watermelon','Кавун','Wassermelone','Pastèque'],
peach:['Персики','Peaches','Персики','Pfirsiche','Pêches'],
tomato:['Помидоры','Tomatoes','Помідори','Tomaten','Tomates'],
cucumber:['Огурцы','Cucumbers','Огірки','Gurken','Concombres'],
potato:['Картофель','Potatoes','Картопля','Kartoffeln','Pommes de terre'],
carrot:['Морковь','Carrots','Морква','Karotten','Carottes'],
onion:['Лук','Onions','Цибуля','Zwiebeln','Oignons'],
garlic:['Чеснок','Garlic','Часник','Knoblauch','Ail'],
pepper:['Перец','Peppers','Перець','Paprika','Poivrons'],
cabbage:['Капуста','Cabbage','Капуста','Kohl','Chou'],
avocado:['Авокадо','Avocado','Авокадо','Avocado','Avocat'],
mushroom:['Грибы','Mushrooms','Гриби','Pilze','Champignons'],
corn:['Кукуруза','Corn','Кукурудза','Mais','Maïs'],
broccoli:['Брокколи','Broccoli','Броколі','Brokkoli','Brocoli'],
milk:['Молоко','Milk','Молоко','Milch','Lait'],
cheese:['Сыр','Cheese','Сир','Käse','Fromage'],
butter:['Масло','Butter','Масло','Butter','Beurre'],
yogurt:['Йогурт','Yogurt','Йогурт','Joghurt','Yaourt'],
eggs:['Яйца','Eggs','Яйця','Eier','Œufs'],
sourcream:['Сметана','Sour cream','Сметана','Sahne','Crème'],
bread:['Хлеб','Bread','Хліб','Brot','Pain'],
baguette:['Багет','Baguette','Багет','Baguette','Baguette'],
croissant:['Круассаны','Croissants','Круасани','Croissants','Croissants'],
cake:['Торт','Cake','Торт','Kuchen','Gâteau'],
cookies:['Печенье','Cookies','Печиво','Kekse','Biscuits'],
chicken:['Курица','Chicken','Курка','Hähnchen','Poulet'],
meat:['Мясо','Meat','М’ясо','Fleisch','Viande'],
sausage:['Колбаса','Sausage','Ковбаса','Wurst','Saucisson'],
fish:['Рыба','Fish','Риба','Fisch','Poisson'],
bacon:['Бекон','Bacon','Бекон','Speck','Bacon'],
rice:['Рис','Rice','Рис','Reis','Riz'],
pasta:['Макароны','Pasta','Макарони','Nudeln','Pâtes'],
flour:['Мука','Flour','Борошно','Mehl','Farine'],
sugar:['Сахар','Sugar','Цукор','Zucker','Sucre'],
salt:['Соль','Salt','Сіль','Salz','Sel'],
oil:['Масло растительное','Oil','Олія','Öl','Huile'],
coffee:['Кофе','Coffee','Кава','Kaffee','Café'],
tea:['Чай','Tea','Чай','Tee','Thé'],
chocolate:['Шоколад','Chocolate','Шоколад','Schokolade','Chocolat'],
honey:['Мёд','Honey','Мед','Honig','Miel'],
jam:['Варенье','Jam','Варення','Marmelade','Confiture'],
cereal:['Хлопья','Cereal','Пластівці','Müsli','Céréales'],
nuts:['Орехи','Nuts','Горіхи','Nüsse','Noix'],
water:['Вода','Water','Вода','Wasser','Eau'],
juice:['Сок','Juice','Сік','Saft','Jus'],
soda:['Газировка','Soda','Газованка','Limonade','Soda'],
beer:['Пиво','Beer','Пиво','Bier','Bière'],
wine:['Вино','Wine','Вино','Wein','Vin'],
toiletpaper:['Туалетная бумага','Toilet paper','Туалетний папір','Toilettenpapier','Papier toilette'],
papertowel:['Бумажные полотенца','Paper towels','Паперові рушники','Küchenrolle','Essuie-tout'],
soap:['Мыло','Soap','Мило','Seife','Savon'],
shampoo:['Шампунь','Shampoo','Шампунь','Shampoo','Shampooing'],
toothpaste:['Зубная паста','Toothpaste','Зубна паста','Zahnpasta','Dentifrice'],
detergent:['Стиральный порошок','Detergent','Пральний порошок','Waschmittel','Lessive'],
sponge:['Губки','Sponges','Губки','Schwämme','Éponges'],
trashbag:['Мусорные пакеты','Trash bags','Сміттєві пакети','Müllbeutel','Sacs poubelle'],
diapers:['Подгузники','Diapers','Підгузки','Windeln','Couches'],
petfood:['Корм','Pet food','Корм','Tierfutter','Croquettes'],
battery:['Батарейки','Batteries','Батарейки','Batterien','Piles'],
bulb:['Лампочка','Light bulb','Лампочка','Glühbirne','Ampoule'],
medicine:['Лекарства','Medicine','Ліки','Medikamente','Médicaments']
};
var LANG_IX = {ru:0, en:1, uk:2, de:3, fr:4};

/* Плоский индекс основ: [основа, ключ, категория, единица, число_слов] */
var INDEX = [];
for (var i=0;i<P.length;i++){
  var row = P[i];
  for (var lng in row[3]){
    var arr = row[3][lng];
    for (var j=0;j<arr.length;j++){
      var stem = arr[j];
      INDEX.push([stem, row[0], row[1], row[2], stem.split(' ').length]);
    }
  }
}
/* Сначала самые «требовательные» основы: больше слов → длиннее.
   Так «зубн паст» побеждает «паст», а «туалетн бумаг» — «бумаг». */
INDEX.sort(function(a,b){ return (b[4]-a[4]) || (b[0].length-a[0].length); });

var WORD_SPLIT = /[^a-zа-яёіїєґäöüßàâçéèêëîïôùûœ]+/i;
function textWords(t){
  return t.split(WORD_SPLIT).filter(function(w){ return w.length > 0; });
}
/* Основа подходит слову, если слово с неё НАЧИНАЕТСЯ.
   Так ловятся падежи: «яблок» ← «яблоки», «яблоками», «яблочный». */
function stemHits(stem, words){
  for (var i=0;i<words.length;i++){
    if (words[i].length >= Math.min(3, stem.length) && words[i].indexOf(stem) === 0) return true;
  }
  return false;
}

/* Поиск товара по произвольному тексту.
   Возвращает {key, cat, unit, parts, words} или null.
   parts — из скольких слов состоит сработавшая основа,
   words — сколько слов во входном тексте (по этой паре приложение решает,
   заменять ли текст пользователя на витринное название). */
function nbMatch(text){
  var t = String(text||'').toLowerCase().replace(/\s+/g,' ').trim();
  if (!t) return null;
  var words = textWords(t);
  if (!words.length) return null;
  for (var i=0;i<INDEX.length;i++){
    var stem = INDEX[i][0], parts = INDEX[i][4], ok = true;
    if (parts > 1){
      /* многословная основа: каждое её слово должно найтись во фразе —
         тоже по началу слова, иначе «зубная паста» не совпадёт с «зубн паст» */
      var sp = stem.split(' ');
      for (var s=0;s<sp.length;s++){ if(!stemHits(sp[s], words)){ ok = false; break; } }
    } else {
      ok = stemHits(stem, words);
    }
    if (ok) return {key:INDEX[i][1], cat:INDEX[i][2], unit:INDEX[i][3], parts:parts, words:words.length};
  }
  return null;
}

g.NB_CATS = CATS;
g.NB_UNITS = UNITS;
g.NB_UNIT_WORDS = UNIT_WORDS;
g.nbMatch = nbMatch;
g.nbCatIcon = function(cat){ return (CATS[cat]||CATS.other).icon; };
g.nbCatName = function(cat,lang){ var c = CATS[cat]||CATS.other; return c[lang]||c.en; };
g.nbUnitName = function(u,lang){ var x = UNITS[u]||UNITS.pc; return x[lang]||x.en; };
g.nbCatOrder = function(cat){ return (CATS[cat]||CATS.other).order; };
g.nbTitle = function(key,lang){
  var row = TITLES[key]; if(!row) return '';
  return row[LANG_IX[lang] === undefined ? 0 : LANG_IX[lang]] || row[1] || row[0];
};

})(window);
