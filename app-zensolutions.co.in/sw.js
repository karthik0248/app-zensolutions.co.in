"use strict";

const CACHE_NAME = 'app-zensolutions.co.in-1592139146766';
const SW_SUPPORTED_PROTOCOL_REGEX = /http(s?):/;
const pageUrls = JSON.parse('["/","/blog","/contact-us","/services","/about"]');
const staticAssets = JSON.parse('["//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/8396e10278a51439/styles.css","//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/943558cf3af2d6ef/styles.css","//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/7a218dddb4dd377d/styles.css","//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/c48f57a408bb2d37/styles.css","//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/78d85c944255bdac/styles.css","https://img1.wsimg.com/poly/v2/polyfill.min.js?unknown=polyfill&flags=gated&features=default%2Cfetch%2CArray.prototype.%40%40iterator%2CArray.prototype.find%2CArray.prototype.findIndex%2CFunction.name%2CNumber.isFinite%2CPromise%2CString.prototype.repeat%2CMath.sign%2CMath.trunc%2CArray.prototype.includes%2CObject.entries%2CObject.values%2CIntersectionObserver%2CIntl.~locale.en-IN","//img1.wsimg.com/blobby/go/gpub/2a4f73fcd74c5421/script.js","//img1.wsimg.com/ceph-p3-01/website-builder-data-prod/static/widgets/UX.3.58.0.js","//img1.wsimg.com/blobby/go/gpub/301074ba9c80d640/script.js","//img1.wsimg.com/blobby/go/gpub/c38ac1bc30f3a3f3/script.js","//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/123cbd9a3e12685/script.js","//img1.wsimg.com/blobby/go/gpub/4d074638af454263/script.js","//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/369e3bd78aeb1a38/script.js","//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/af16d767f406cd28/script.js","//img1.wsimg.com/blobby/go/gpub/773c0c6fe18474a/script.js","//img1.wsimg.com/blobby/go/gpub/e911b827e821903b/script.js","//img1.wsimg.com/blobby/go/gpub/a6dce852aa7edb35/script.js","//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/1e5afd898f08e911/script.js","//fonts.googleapis.com/css?family=Muli:400&display=swap","//fonts.googleapis.com/css?family=Quicksand:400,700&display=swap","//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/911339105e349934/styles.css","//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/abcd29331c839cfb/styles.css","//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/aa8b5b798f63ba37/script.js","//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/7a807a1275d1a5f5/script.js","//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/8649b5aec520ed52/script.js","//img1.wsimg.com/blobby/go/gpub/b6901d80c6641d0f/script.js","//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/8a5aa17da584eb8/script.js","//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/8089057a70b8e1a6/styles.css","//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/37ed6836837b7d1/styles.css","//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/56972353903491/styles.css","//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/84771cd584ed5952/script.js","//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/bf09fd43a296512c/script.js","//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/c1904a769dfcca7b/script.js","//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/b4627d4cb78846c8/styles.css","//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/6fe5d873d135c38a/styles.css","//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/41e37deb6bfdc6d2/styles.css","//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/fd4930520beecc5e/script.js","//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/e17da1754f4ee399/script.js","//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/8b4793915a3b0c43/script.js","//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/28095a89135268ad/styles.css","//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/30da610c09fe4b17/styles.css","//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/9527e419ec4acd0d/styles.css","//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/1cb67d99f8454d7e/styles.css","//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/3ce447565b93c3e1/script.js","//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/37d872c20886871a/script.js","//img1.wsimg.com/blobby/go/556796cb-503b-4fcc-8fbe-a9aa56c2d232/gpub/e27efaca1ebaf737/script.js"]');
const networkOnlyUrls = JSON.parse('["https://api.ola.godaddy.com","https://556796cb-503b-4fcc-8fbe-a9aa56c2d232.onlinestore.godaddy.com","https://img.secureserver.net/t/1/tl/event","https://img.test-secureserver.net/t/1/tl/event","https://www.google-analytics.com/collect"]');
const networkOnlyUrlsRegex = JSON.parse('["app-zensolutions.co.in/m/api/.*","app-zensolutions.co.in(?:/.*)?/ola/services/.*","app-zensolutions.co.in/ola/meetings/.*","securepay.godaddy.com/api/apps/ola/accounts/.*"]').map(regexString => new RegExp(regexString));
const networkThenCacheUrls = JSON.parse('["https://blog.apps.secureserver.net/v1/website/556796cb-503b-4fcc-8fbe-a9aa56c2d232/feed/post/","https://blog.apps.secureserver.net/v1/website/556796cb-503b-4fcc-8fbe-a9aa56c2d232/feed"]');
const networkThenCacheUrlsRegex = JSON.parse('["app-zensolutions.co.in(?:/.*)?/f/.*"]').map(regexString => new RegExp(regexString));
self.addEventListener('unhandledrejection', function (event) {
  // eslint-disable-next-line no-console
  console.warn('sw unhandledrejection error: ', event.reason);
});

function preCacheResources() {
  return caches.open(CACHE_NAME).then(function (cache) {
    // Pre-Cache pages to improve subsequent navigation but don't making it blocking
    // Avoid extremely large websites from using the end-users data in unexpected amount
    cache.addAll(pageUrls); // Pre-cache all static assets by keeping them as installation dependency

    return cache.addAll(staticAssets);
  });
}

self.addEventListener('install', function (event) {
  // Let the new worker take over as fast as possible
  // For quirks refer: https://developers.google.com/web/fundamentals/primers/service-workers/lifecycle#skip_the_waiting_phase
  self.skipWaiting();
  event.waitUntil(preCacheResources());
});

function clearOldCache() {
  return caches.keys().then(function (keys) {
    return Promise.all(keys.filter(function (key) {
      return key !== CACHE_NAME;
    }).map(function (key) {
      return caches.delete(key);
    }));
  });
}

self.addEventListener('activate', function (event) {
  // Remember to keep this step as lean as possible
  // Only sutiable for performing stuff that can't be done while the previous worker is running
  event.waitUntil(clearOldCache().then(function () {
    clients.claim(); // eslint-disable-line no-undef
  }));
});

function isPageRequest(url) {
  return url.origin === location.origin && pageUrls.includes(url.pathname);
}

function isNetworkOnlyRequest(url, requestMethod) {
  // Browser extensions don't use the standard `http` and `https` protocols
  // Refer: https://github.com/GoogleChromeLabs/sw-toolbox/issues/171
  if (requestMethod !== 'GET' || !SW_SUPPORTED_PROTOCOL_REGEX.test(url.protocol)) {
    return true;
  }

  const urlOrigin = url.origin;
  const urlPathName = url.pathname;
  const fullUrl = `${urlOrigin}${urlPathName}`;

  if (networkOnlyUrls.includes(urlOrigin) || networkOnlyUrls.includes(fullUrl)) {
    return true;
  }

  if (networkOnlyUrlsRegex.some(regex => regex.test(fullUrl))) {
    return true;
  }

  return false;
}

function isNetworkThenCacheRequest(url, requestMethod) {
  // Browser extensions don't use the standard `http` and `https` protocols
  // Refer: https://github.com/GoogleChromeLabs/sw-toolbox/issues/171
  if (requestMethod !== 'GET' || !SW_SUPPORTED_PROTOCOL_REGEX.test(url.protocol)) {
    return true;
  }

  const urlOrigin = url.origin;
  const urlPathName = url.pathname;
  const fullUrl = `${urlOrigin}${urlPathName}`;

  if (networkThenCacheUrls.includes(urlOrigin) || networkThenCacheUrls.includes(fullUrl)) {
    return true;
  }

  if (networkThenCacheUrlsRegex.some(regex => regex.test(fullUrl))) {
    return true;
  }

  return false;
}

function handleWithNetworkThenCache(event) {
  return event.respondWith(fetch(event.request).then(function (networkResponse) {
    if (!networkResponse.ok) {
      return networkResponse;
    }

    return caches.open(CACHE_NAME).then(function (cache) {
      cache.put(event.request, networkResponse.clone());
      return networkResponse;
    });
  }).catch(function () {
    // network failed, try to serve a cached response or offline page if there is one
    return caches.match(event.request);
  }));
}

function handleWithCacheThenNetwork(event) {
  return event.respondWith(caches.open(CACHE_NAME).then(function (cache) {
    return cache.match(event.request).then(function (response) {
      return response || fetch(event.request).then(function (networkResponse) {
        networkResponse.ok && cache.put(event.request, networkResponse.clone());
        return networkResponse;
      });
    });
  }).catch(function (err) {
    // TODO: respond with `offline.html` as the final fallback for page requests
    // and use appropriate response for other cases
    return err;
  }));
}

function handleWithNetwork(event) {
  return event.respondWith(fetch(event.request));
}

function handleRequests(event) {
  const requestURL = new URL(event.request.url);

  if (isNetworkOnlyRequest(requestURL, event.request.method)) {
    return handleWithNetwork(event);
  }

  if (isPageRequest(requestURL) || isNetworkThenCacheRequest(requestURL, event.request.method)) {
    // To avoid serving stale content after a publish
    // always fetch the markup from origin and use cache only when the user is offline
    return handleWithNetworkThenCache(event);
  }

  return handleWithCacheThenNetwork(event);
}

self.addEventListener('fetch', handleRequests);