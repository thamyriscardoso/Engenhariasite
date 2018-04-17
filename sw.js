self.addEventListener('install', function (event) {
    var indexPage = new Request('index.html');
    event.waitUntil(
       fetch(indexPage).then(function (response) {
            caches.open('pwabuilder-offline').then(function (cache) {
                console.log('[PWA Builder] Cached index page during Install' + response.url);
                return cache.addAll([
                    '/Engenhariasite/',
                    '/Engenhariasite/index.html',
                    '/Engenhariasite/acompanhamentos.html',
                    '/Engenhariasite/bebidas.html',
                    '/Engenhariasite/cadastro.html',
                    '/Engenhariasite/cadastrocerto.html',
                    '/Engenhariasite/cadastrocerto1.html',
                    '/Engenhariasite/cadastrocerto2.html',
                    '/Engenhariasite/cadastrocerto3.html',
                    '/Engenhariasite/carrinho.html',
                    '/Engenhariasite/contatos.html',
                    '/Engenhariasite/fotos.html',
                    '/Engenhariasite/lanches.html',
                    '/Engenhariasite/offline.html',
                    '/Engenhariasite/pizza.html',
                    '/Engenhariasite/produtos.html',
                    '/Engenhariasite/promocoes.html',
                    '/Engenhariasite/manifest.json',
                    '/Engenhariasite/css/estilo.css',
                    '/Engenhariasite/css/bootstrap-responsive.css',
                    '/Engenhariasite/css/bootstrap-responsive.min.css',
                    '/Engenhariasite/css/bootstrap.min.css',
                    '/Engenhariasite/css/jumbotron-narrow.css',
                    '/Engenhariasite/css/signin.css',
                    '/Engenhariasite/img/burger.png',
                    '/Engenhariasite/img/carne.png',
                    '/Engenhariasite/img/fritas.png',
                    '/Engenhariasite/img/lanche.jpg',
                    '/Engenhariasite/img/pizza.jpg',
                    '/Engenhariasite/img/torre.png',
                    '/Engenhariasite/js/bootstrap.js',
                    '/Engenhariasite/js/bootstrap.min.js',
                    '/Engenhariasite/js/jquery.min.js',
                    '/Engenhariasite/js/main.js',
                    '/Engenhariasite/js/npm.js',
                           ]);
            });
        })
    );
});


//If any fetch fails, it will look for the request in the cache and serve it from there first
self.addEventListener('fetch', function(event) {
  var updateCache = function(request){
    return caches.open('pwabuilder-offline').then(function (cache) {
      return fetch(request).then(function (response) {
        console.log('[PWA Builder] add page to offline'+response.url)
        return cache.put(request, response);
      });
    });
  };

  event.waitUntil(updateCache(event.request));

  event.respondWith(
    fetch(event.request).catch(function(error) {
      console.log( '[PWA Builder] Network request Failed. Serving content from cache: ' + error );

      //Check to see if you have it in the cache
      //Return response
      //If not in the cache, then return error page
      return caches.open('pwabuilder-offline').then(function (cache) {
        return cache.match(event.request).then(function (matching) {
          var report =  !matching || matching.status == 404?Promise.reject('no-match'): matching;
          return report
        });
      });
    })
  );
})
