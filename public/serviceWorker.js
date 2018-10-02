this.addEventListener('install', function (event) {
  event.waitUntil(
    this.caches.open('v1')
      .then(function (cache) {
        return cache.addAll([
          '/',
          'https://cdnjs.cloudflare.com/ajax/libs/pulltorefreshjs/0.1.7/pulltorefresh.min.js',
          '/js/main.mjs',
          '/js/spookyMeter.js',
          '/css/main.css',
          '/images/level0.gif',
          '/images/level1.gif',
          '/images/level2.gif',
          '/images/level3.gif',
          '/images/level4.gif'
        ])
      })
  )
})

this.addEventListener('fetch', function (event) {
  if (event.request.method !== 'GET') {
    return
  }

  event.respondWith(async function () {
    const cache = await this.caches.open('v1')
    const cachedResponse = await cache.match(event.request)

    if (cachedResponse) {
      event.waitUntil(cache.add(event.request))
      return cachedResponse
    }

    return this.fetch(event.request)
  }())
})
