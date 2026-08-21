const CACHE_NAME = 'oficio-diario-v1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './manha.html',
  './noite.html',
  './lutero.jpeg',
  './deustrino.mp3',
  './debonspoderes.mp3',
  './manifest.json',
  './icon-512.png'
];

// Install Event
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    })
  );
});

// Fetch Event (Serves cached files when offline)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
