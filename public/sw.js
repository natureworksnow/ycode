self.addEventListener('install', (event) => {
  self.skipWaiting();
});

self.addEventListener('fetch', (event) => {
  // Network-first standard pass-through strategy
  event.respondWith(fetch(event.request));
});
