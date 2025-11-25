const CACHE_NAME = 'flashcard-cache-v3';
const APP_SHELL_URLS = [
  '/',
  '/index.html',
  '/index.tsx',
  '/metadata.json',
  '/App.tsx',
  '/types.ts',
  '/constants.ts',
  '/components/Flashcard.tsx',
  '/components/LearningFlow.tsx',
  '/components/ModeSelection.tsx',
  '/components/SubThemeSelection.tsx',
  '/components/PresetList.tsx',
  '/components/PresetDetail.tsx',
  '/components/WordSelector.tsx',
  '/components/DevTools.tsx',
  '/components/ProgressView.tsx',
  '/components/WordListView.tsx',
  '/components/RankingSystem.tsx',
  '/components/RankModal.tsx',
  '/components/TypingPractice.tsx',
  '/components/McqPractice.tsx',
  '/utils/styles.ts',
  '/utils/ranks.ts',
  '/utils/helpers.ts',
  'https://cdn.tailwindcss.com'
];

self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(APP_SHELL_URLS);
            })
    );
});

self.addEventListener('fetch', event => {
    if (event.request.method !== 'GET') {
        return;
    }

    event.respondWith(
        caches.match(event.request)
            .then(cachedResponse => {
                if (cachedResponse) {
                    return cachedResponse;
                }

                return fetch(event.request).then(
                    networkResponse => {
                        if (!networkResponse || (networkResponse.status !== 200 && networkResponse.status !== 0)) {
                            return networkResponse;
                        }
                        
                        const responseToCache = networkResponse.clone();

                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });

                        return networkResponse;
                    }
                ).catch(error => {
                    console.error('Fetching failed, and not in cache:', error);
                });
            })
    );
});

self.addEventListener('activate', event => {
  const cacheWhitelist = [CACHE_NAME];
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});