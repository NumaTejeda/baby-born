const CACHE_NAME = "guardias-v1";
const urlsToCache = ["index.html", "index.js", "manifest.json", "icons/icon-192.png", "icons/icon-512.png"];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
});

self.addEventListener("activate", event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames =>
      Promise.all(
        cacheNames.map(cacheName => {
          if (!cacheWhitelist.includes(cacheName)) {
            return caches.delete(cacheName);
          }
        })
      )
    )
  );
});

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('sw.js')
      .then(registration => {
          console.log('Service Worker registrado con éxito:', registration);
      })
      .catch(error => {
          console.log('Error al registrar el Service Worker:', error);
      });
}