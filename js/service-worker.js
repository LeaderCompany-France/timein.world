// Service Worker for PWA functionality
const CACHE_NAME = 'timein-world-v1';
const urlsToCache = [
    '/',
    '/css/main.css',
    '/js/app.js',
    '/js/router.js',
    '/js/translations.js',
    '/js/cities-data.js',
    '/js/capitals-data.js',
    '/js/seo-manager.js'
];

// Install event - cache resources
self.addEventListener('install', event => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(cache => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
            .catch(err => {
                console.log('Cache failed:', err);
            })
    );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
    event.waitUntil(
        caches.keys().then(cacheNames => {
            return Promise.all(
                cacheNames.map(cacheName => {
                    if (cacheName !== CACHE_NAME) {
                        console.log('Deleting old cache:', cacheName);
                        return caches.delete(cacheName);
                    }
                })
            );
        })
    );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
    // Skip non-GET requests
    if (event.request.method !== 'GET') {
        return;
    }
    
    // Parse URL
    const url = new URL(event.request.url);
    
    // Handle navigation requests (HTML pages)
    if (event.request.mode === 'navigate') {
        event.respondWith(
            fetch(event.request)
                .then(response => {
                    // Clone the response
                    const responseToCache = response.clone();
                    
                    caches.open(CACHE_NAME)
                        .then(cache => {
                            cache.put(event.request, responseToCache);
                        });
                    
                    return response;
                })
                .catch(() => {
                    // If offline, try to serve from cache
                    return caches.match(event.request)
                        .then(response => {
                            if (response) {
                                return response;
                            }
                            // If not in cache, serve the offline page
                            return caches.match('/');
                        });
                })
        );
        return;
    }
    
    // Handle static assets
    event.respondWith(
        caches.match(event.request)
            .then(response => {
                if (response) {
                    // Serve from cache
                    return response;
                }
                
                // Not in cache, fetch from network
                return fetch(event.request)
                    .then(response => {
                        // Check if valid response
                        if (!response || response.status !== 200 || response.type !== 'basic') {
                            return response;
                        }
                        
                        // Clone the response
                        const responseToCache = response.clone();
                        
                        // Cache the fetched response
                        caches.open(CACHE_NAME)
                            .then(cache => {
                                cache.put(event.request, responseToCache);
                            });
                        
                        return response;
                    });
            })
    );
});

// Handle messages from the main app
self.addEventListener('message', event => {
    if (event.data && event.data.type === 'SKIP_WAITING') {
        self.skipWaiting();
    }
});

// Periodic background sync for updating time data
self.addEventListener('periodicsync', event => {
    if (event.tag === 'update-time-data') {
        event.waitUntil(updateTimeData());
    }
});

async function updateTimeData() {
    // In a real implementation, this could fetch updated timezone data
    // For now, we just ensure the cache is fresh
    try {
        const cache = await caches.open(CACHE_NAME);
        const requests = urlsToCache.map(url => {
            return fetch(url).then(response => {
                return cache.put(url, response);
            });
        });
        await Promise.all(requests);
        console.log('Time data updated');
    } catch (error) {
        console.error('Failed to update time data:', error);
    }
}