"use strict";function setOfCachedUrls(e){return e.keys().then(function(e){return e.map(function(e){return e.url})}).then(function(e){return new Set(e)})}var precacheConfig=[["index.html","e7b145a9093e01421ecab54c54a33241"],["static/css/main.5c62ee41.css","228f1844731249d15862c3162e9f4b60"],["static/js/main.02885ac8.js","af2b892929d5e58aeb06a9560339fafd"],["static/media/1024Xmap.7b5278af.jpg","7b5278afc5a143f701f17ee6269c36b1"],["static/media/1366-map.4a5adc14.jpg","4a5adc14f4467611ae82a7115ce8b7be"],["static/media/1920-map.3f2f249d.jpg","3f2f249dc00d13fa4113ffd62885d5d1"],["static/media/1st-image.fffb88cc.jpg","fffb88ccd730e8cb28ed0a4220e6ba97"],["static/media/3-thumb.cc41dfd3.png","cc41dfd30ef326a02708be53b369bfac"],["static/media/3.e9686df5.png","e9686df535a7f11577aa6d545a93f122"],["static/media/4.484dbf27.png","484dbf277fd147a83b0bf882880dbe37"],["static/media/5-thumb.92f0406d.png","92f0406d1b5a0d5fb43147b17799efdb"],["static/media/5.07933925.png","07933925e249ce1a33aacc921d1bcda3"],["static/media/6-thumb.ed1fda9f.png","ed1fda9fa9859cd5c664d5461c28239a"],["static/media/6.5918e770.png","5918e7707eea2583f632c6d5d2b2e615"],["static/media/7-thumb.a8e2f055.png","a8e2f0559f29b68b68617cd5109f209e"],["static/media/7.d66211e5.png","d66211e5d8ec8742f3fd8245a2b5eaa1"],["static/media/768-map.2d47d17a.jpg","2d47d17a74dcc96bc1af192e7ab60c81"],["static/media/8-thumb.4bfb84ef.png","4bfb84ef6bd2cd3858b24b17820b7b4f"],["static/media/8.ed153319.png","ed15331987de92d99cb650aef8c1c623"],["static/media/9-thumb.b870385e.png","b870385e2847a06aa8d10fc086e8c74e"],["static/media/9.2c4dea1a.png","2c4dea1a95a9f0d61d56cd5453ea65f4"],["static/media/CI-and-CD.f23e98f0.svg","f23e98f0bdf32bde9eeb7d505de3c8e0"],["static/media/agile-qa-practices.46dd3913.svg","46dd39135380e3d037f82a80f9871881"],["static/media/automation-and-framework.a2817b90.png","a2817b900578cea4456238463c645cef"],["static/media/banner.6c3bfce5.png","6c3bfce522f397ffda3167162fa1e06f"],["static/media/bug-black.855945ba.svg","855945ba5e4b2400b8483c3ed7475f8a"],["static/media/bug-white.0e283189.svg","0e283189f40b58fdfff9f7b9161b1d48"],["static/media/calendar.5728b77f.svg","5728b77f57b9b6f4679fa74d12eae955"],["static/media/close-envelope.1f33acf8.svg","1f33acf8665c04266f168bb954beafe3"],["static/media/credentials.c6bf0dc7.svg","c6bf0dc7c156245513ec4c4d2402e63e"],["static/media/introduction-to-agile.c096846d.svg","c096846d88a89d263bb4862d4358efc8"],["static/media/link.1f369346.svg","1f3693469ea8c3f60d34b18fc09dc193"],["static/media/location.48cd543d.svg","48cd543d0b3e6ed62b9034c0cccb8f0b"],["static/media/logo-xt.1f57a6db.png","1f57a6dbed41477bc51411a095ca1e08"],["static/media/phone-receiver.d11f2b3c.svg","d11f2b3ccc73dca0c569ee2111903ea3"],["static/media/reply.b85aa83b.svg","b85aa83b0abd9aea50c361e769d231f9"],["static/media/solve-the-problems.cfbde73d.svg","cfbde73dc63ebf526c96c198dfc1dd48"],["static/media/submit-here.50f53566.svg","50f53566de22672c0ad71744084f7482"],["static/media/testing-techniques.b15fe775.png","b15fe775e9da819778213f471d25e754"],["static/media/time-white.d01075d2.svg","d01075d2d9bd88f567bc7f4ab079eaba"],["static/media/time.72e610b0.svg","72e610b0c6ae471f88cc046e2f66b5f9"]],cacheName="sw-precache-v3-sw-precache-webpack-plugin-"+(self.registration?self.registration.scope:""),ignoreUrlParametersMatching=[/^utm_/],addDirectoryIndex=function(e,a){var t=new URL(e);return"/"===t.pathname.slice(-1)&&(t.pathname+=a),t.toString()},cleanResponse=function(e){return e.redirected?("body"in e?Promise.resolve(e.body):e.blob()).then(function(a){return new Response(a,{headers:e.headers,status:e.status,statusText:e.statusText})}):Promise.resolve(e)},createCacheKey=function(e,a,t,c){var n=new URL(e);return c&&n.pathname.match(c)||(n.search+=(n.search?"&":"")+encodeURIComponent(a)+"="+encodeURIComponent(t)),n.toString()},isPathWhitelisted=function(e,a){if(0===e.length)return!0;var t=new URL(a).pathname;return e.some(function(e){return t.match(e)})},stripIgnoredUrlParameters=function(e,a){var t=new URL(e);return t.hash="",t.search=t.search.slice(1).split("&").map(function(e){return e.split("=")}).filter(function(e){return a.every(function(a){return!a.test(e[0])})}).map(function(e){return e.join("=")}).join("&"),t.toString()},hashParamName="_sw-precache",urlsToCacheKeys=new Map(precacheConfig.map(function(e){var a=e[0],t=e[1],c=new URL(a,self.location),n=createCacheKey(c,hashParamName,t,/\.\w{8}\./);return[c.toString(),n]}));self.addEventListener("install",function(e){e.waitUntil(caches.open(cacheName).then(function(e){return setOfCachedUrls(e).then(function(a){return Promise.all(Array.from(urlsToCacheKeys.values()).map(function(t){if(!a.has(t)){var c=new Request(t,{credentials:"same-origin"});return fetch(c).then(function(a){if(!a.ok)throw new Error("Request for "+t+" returned a response with status "+a.status);return cleanResponse(a).then(function(a){return e.put(t,a)})})}}))})}).then(function(){return self.skipWaiting()}))}),self.addEventListener("activate",function(e){var a=new Set(urlsToCacheKeys.values());e.waitUntil(caches.open(cacheName).then(function(e){return e.keys().then(function(t){return Promise.all(t.map(function(t){if(!a.has(t.url))return e.delete(t)}))})}).then(function(){return self.clients.claim()}))}),self.addEventListener("fetch",function(e){if("GET"===e.request.method){var a,t=stripIgnoredUrlParameters(e.request.url,ignoreUrlParametersMatching);a=urlsToCacheKeys.has(t);a||(t=addDirectoryIndex(t,"index.html"),a=urlsToCacheKeys.has(t));!a&&"navigate"===e.request.mode&&isPathWhitelisted(["^(?!\\/__).*"],e.request.url)&&(t=new URL("/xtremetesting/index.html",self.location).toString(),a=urlsToCacheKeys.has(t)),a&&e.respondWith(caches.open(cacheName).then(function(e){return e.match(urlsToCacheKeys.get(t)).then(function(e){if(e)return e;throw Error("The cached response that was expected is missing.")})}).catch(function(a){return console.warn('Couldn\'t serve response for "%s" from cache: %O',e.request.url,a),fetch(e.request)}))}});