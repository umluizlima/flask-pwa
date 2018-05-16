(function() {
  if('serviceWorker' in navigator) {
    navigator.serviceWorker.register('/sw.js')
             .then(function(registration) {
             console.log('Service Worker Registered');
             return registration;
    })
    .catch(function(err) {
      console.error('Unable to register service worker.', err);
    });
    navigator.serviceWorker.ready.then(function(registration) {
      console.log('Service Worker Ready');
    });
  }
})();
