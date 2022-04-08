// //const CACHE_NAME = 'cache-1';
// const STATIC_CACHE = 'static-v1';
// const CACHE_DYNAMIC = 'dynamic-1';
// const CACHE_INMUTABLE = 'inmutable-1';
// const APP_SHELL = ['/','index.html','css/style',
// 'images/lentes.png',
// ,'js/app.js',
// 'images/avs/carl.jpg',
// 'images/avs/russel.jpg',
// 'images/avs/doug.jpg',
// 'images/avs/doug.jpg',

// ];

// const APP_INMUTABLE = [
// 'https://fonts.googleapis.com/css?family=Quicksand:300,400',
// 'https://fonts.googleapis.com/css?family=Lato:400,300' ,
// 'https://netdna.bootstrapcdn.com/font-awesome/3.1.1/css/font-awesome.css',
// 'js/libs/jquery-3.6.0.min.js'];

// self.addEventListener('install' ,event => {
// const cacheapp = caches.open(CACHE_NAME).then(cache =>{
//     cache.addAll(APP_SHELL);
// });
// const cacheinmutable = caches.open(CACHE_INMUTABLE).then(cache =>{
// cache.addAll(APP_INMUTABLE);
// });
// event.waitUntil(Promise.all([cacheapp,cacheinmutable]));
// });

// self.addEventListener('activate', event =>{
// const respuesta = caches.keys().then(keys => keys.forEach(key => {
//     if (key != STATIC_CACHE && key.includes('static')){
//         return caches.delete(key);
//     }
// }));

// event.waitUntil(respuesta);
// });

// self.addEventListener('fetch', event => {
// const respuesta = caches.match( event.request).then(res =>{
//     if(res){return res;}
//     else {
//         return fetch(e.request).then(newRes =>{
//             return actualizaCacheDinamico(CACHE_DYNAMIC, event.request, newRes);
//         });
//     }
// });
// });

var url = window.location.href; //obtenemos todo el url
var pwaLocation = '/PWA/sw.js'; //path donde se encuentra el sw en GitHub

if(navigator.serviceWorker){
    if(url.includes('localhost')){
        pwaLocation = '/sw.js';
    }
navigator.serviceWorker.register(pwaLocation);
}