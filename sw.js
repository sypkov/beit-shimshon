const CACHE = 'beit-shimshon-v1';
const ASSETS = [
  '/beit-shimshon/',
  '/beit-shimshon/index.html',
  '/beit-shimshon/icon.png',
  '/beit-shimshon/manifest.json'
];

self.addEventListener('install', e => {
  e.waitUntil(caches.open(CACHE).then(c => c.addAll(ASSETS)));
});

self.addEventListener('fetch', e => {
  e.respondWith(
    fetch(e.request).catch(() => caches.match(e.request))
  );
});
