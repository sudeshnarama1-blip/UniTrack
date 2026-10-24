/*
 * UniTrack service worker.
 * Saves the app's files after the first visit so it opens instantly
 * and keeps working offline. All your data already lives on the device.
 * Bump CACHE_VERSION if the app ever gets stuck on an old version.
 */
const CACHE_VERSION = "unitrack-v1"

self.addEventListener("install", () => self.skipWaiting())

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_VERSION).map((k) => caches.delete(k)))
    )
  )
  self.clients.claim()
})

self.addEventListener("fetch", (event) => {
  const request = event.request
  if (request.method !== "GET" || new URL(request.url).origin !== self.location.origin) return

  // The page itself: try the network first so updates show up, fall back to the saved copy.
  if (request.mode === "navigate") {
    event.respondWith(
      fetch(request)
        .then((response) => {
          const copy = response.clone()
          caches.open(CACHE_VERSION).then((cache) => cache.put("./", copy))
          return response
        })
        .catch(() => caches.match("./"))
    )
    return
  }

  // Scripts, styles, images: use the saved copy, fetch and save it the first time.
  event.respondWith(
    caches.match(request).then(
      (cached) =>
        cached ||
        fetch(request).then((response) => {
          if (response.ok) {
            const copy = response.clone()
            caches.open(CACHE_VERSION).then((cache) => cache.put(request, copy))
          }
          return response
        })
    )
  )
})
