const cacheName = 'Flask';

self.addEventListener('install', e => {
  console.log('[ServiceWorker] Install');
  const timeStamp = Date.now();
  e.waitUntil(
    caches.open(cacheName).then(cache => {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll([
        '/',
        '/static/js/app.js',
        '/static/css/style.css'
      ])
      .then(() => {
        console.log('[ServiceWorker] Successfully cached');
        self.skipWaiting()
      })
      .catch((error) => {
        console.log(error)
      });
    })
  );
});

self.addEventListener('activate', event => {
  console.log('[ServiceWorker] Activate');
  event.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});

self.addEventListener('fetch', event => {
  console.log('[ServiceWorker] Fetch', event.request.url);
  event.respondWith(
    caches.open(cacheName)
      .then(cache => cache.match(event.request, {ignoreSearch: true}))
      .then(response => {
      return response || fetch(event.request);
    })
  );
});
