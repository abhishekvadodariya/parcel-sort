// Change 'v1' to 'v2', 'v3', etc., whenever you update the JSON
const CACHE_NAME = 'sorter-v2'; 

const ASSETS = [
  './',
  './index.html'
];

// This logic deletes the OLD cache and forces the NEW one
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );
});
