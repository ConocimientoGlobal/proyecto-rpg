const CACHE_NAME = 'november-rpg-v1';
const urlsToCache = [
  './',
  './index.html',
  './main.js',
  './d5f8ddf1940ff25afb89f2923f3a081e.png',
  './3fe79a67eb3940203df992b285552c3e.png',
  './7a7e5731f69a84918cf86370646366ff.png',
  './51679299555ef69139001b59675241e3.png',
  './manifest.json'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
