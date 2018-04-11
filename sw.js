const CACHE_NAME = 'engenharia';
self.addEventListener('install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME).then(function (cache) {
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
                '/Engenhariasite/img/burguer.png',
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
                '/Engenhariasite/sw.js'
            ])
        })
    )
});
self.addEventListener('install', function (event) {
    var offlinePage = new Request('offline.html');
    event.waitUntil(
        fetch(offlinePage).then(function (response) {
            return caches.open('pwabuilder-offline').then(function (cache) {
                console.log('[PWA Builder] Cached offline page during Install' + response.url);
                return cache.put(offlinePage, response);
            });
        }));
});


self.addEventListener('fetch', function (event) {
    event.respondWith(
        fetch(event.request).catch(function (error) {
            console.error('[PWA Builder] Network request Failed. Serving offline page ' + error);
            return caches.open('pwabuilder-offline').then(function (cache) {
                return cache.match('offline.html');
            });
        }));
});

self.addEventListener('refreshOffline', function (response) {
    return caches.open('pwabuilder-offline').then(function (cache) {
        console.log('[PWA Builder] Offline page updated from refreshOffline event: ' + response.url);
        return cache.put(offlinePage, response);
    });
});
