/* NeedBuy service worker — офлайн-оболочка.
   Стратегия: сеть первым делом, кэш как запасной вариант.
   ВАЖНО: при каждом релизе поднимать CACHE_NAME вместе с APP_VERSION в index.html. */
var CACHE_NAME = 'needbuy-v0.6.3';
var ASSETS = ['./', './index.html', './catalog.js', './icons.js', './manifest.json',
              './icon.png', './icon-maskable.png', './apple-touch-icon.png'];

self.addEventListener('install', function(e){
  self.skipWaiting();
  e.waitUntil(caches.open(CACHE_NAME).then(function(c){ return c.addAll(ASSETS); }).catch(function(){}));
});

self.addEventListener('activate', function(e){
  e.waitUntil(caches.keys().then(function(keys){
    return Promise.all(keys.map(function(k){ if(k !== CACHE_NAME) return caches.delete(k); }));
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
