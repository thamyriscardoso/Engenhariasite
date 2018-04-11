const CACHE_NAME = 'cantinho-dos-engordes';

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
            ])
        })
    )
});

self.addEventListener('activate', function activator(event) {
    event.waitUntil(
        caches.keys().then(function (keys) {
            return Promise.all(keys
                .filter(function (key) {
                    return key.indexOf(CACHE_NAME) !== 0;
                })
                .map(function (key) {
                    return caches.delete(key);
                })
            );
        })
    );
});

self.addEventListener('fetch', function (event) {
    event.respondWith(
        caches.match(event.request).then(function (cachedResponse) {
            return cachedResponse || fetch(event.request);
        })
    );
});
