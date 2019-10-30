/* 
    Custom SW using Workbox 
*/
if (workbox) {
    console.log(`Yay! Workbox is loaded 🎉`);
} else {
    console.log(`Boo! Workbox didn't load 😬`);
}

const urlsCache = [
    './favicon.ico'
];

const imgsCache = [
    './earth-bg-loading.jpg'
]

//Pre-cache the static assets
workbox.precaching.precacheAndRoute([
    ...self.__precacheManifest,
    ...urlsCache,
    ...imgsCache
] || []);
workbox.precaching.cleanupOutdatedCaches();

//Caching 3rd party
workbox.routing.registerRoute(
    new RegExp('https:.*min\.(css|js)'),
    new workbox.strategies.CacheFirst()
)

//Caching API
workbox.routing.registerRoute(
    /.*(?:googleapis)\.com.*$/,
    new workbox.strategies.CacheFirst({
        cacheName: 'api-googleapis',
        plugins: [
            new workbox.expiration.Plugin({
                //Only cache request for 6 hours.
                maxAgeSeconds: 6 * 60 * 60,
                //Only cache 50 requests.
                maxEntries: 50
            })
        ]
    })
)