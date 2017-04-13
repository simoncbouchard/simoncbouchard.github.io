//https://developers.google.com/web/fundamentals/getting-started/primers/service-workers
console.log('sw !!');

/*--  VARIABLES  --------------------------------------------------------------------*/

var CACHE_NAME = 'my-site-cache-v1';
var urlsToCache = [
    '/'
];


/*--  INSTALLATION DES CACHES  ------------------------------------------------------*/

self.addEventListener('install', function(event) {                                  // à l'évènment 'install' -> première navigation sur le site
    event.waitUntil(                                                                // sur l'évènement, attendre jusqu'à (extend la période d'écoute de l'évènement pour permettre les opérations asynchrones)
        caches.open(CACHE_NAME)                                                     // ouvre le cache au nom de la variable placé en paramètre
            .then(function(cache) {                                                 // callback
                console.log('opened cache');
                return cache.addAll(urlsToCache);                                   // ajoute en cache au nom de la variable ouverte le contenu du tableau d'URL à placer en cache
            })
    );
});

/*
self.addEventListener('fetch', function(event) {
    console.log('fetch cache');
    console.log(event.request.url);

});
*/

/*--  RETOUR DE REQUÊTES  -----------------------------------------------------------*/

self.addEventListener('fetch', function(event) {                                    // à l'évènement 'fetch' que reçoit le 'service worker' lors des navigations suivantes
    console.log('fetch cache');
    console.log(event.request.url);
    event.respondWith(                                                              // sur l'évènement, répond avec 
    caches.match(event.request)                                                     // retourne une promesse avec la reponse associé au match de l'objet Cache (sinon undefined)
      .then(function(response) {                                                    // fait avec la réponse : 
        if (response) {                                                             // s'il y a une réponse (pas undefined)
          return response;                                                          // retourne la réponse
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        var fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(                                            // call back sur le fetch
          function(response) {
            if(!response || response.status !== 200 || response.type !== 'basic') { // vérifie si la réponse obtenue est valide
              return response;                                                      // retourne la réponse
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            var responseToCache = response.clone();

            caches.open(CACHE_NAME)                                                 // ouvre le cache au nom de la variable placé en paramètre
              .then(function(cache) {                                               // callback
                cache.put(event.request, responseToCache);                          // place dans ce cache la requête (1er paramètre) et sa réponse (2e paramètre)
              });

            return response;                                                        // retourne la réponse
          }
        );
      })
    );
});



/*--  UPDATE SERVICE WORKERS  -------------------------------------------------------*/


self.addEventListener('activate', function(event) {                                 //  à l'évènement 'activate'
    console.log('activate cache');
    
    
  //var cacheWhitelist = ['pages-cache-v1', 'blog-posts-cache-v1'];
  var cacheWhitelist = ['my-site-cache-v2'];

  event.waitUntil(
    caches.keys().then(function(cacheNames) {
        console.log(cacheNames);
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheWhitelist.indexOf(cacheName) === -1) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
});




// https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API/Using_Service_Workers
/*
this.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME).then(function(cache) {
      return cache.addAll([
        '/'
      ]);
    })
  );
});
*/

