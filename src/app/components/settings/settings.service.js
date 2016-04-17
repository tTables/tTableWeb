(function() {
  angular
    .module('tTableNew')
    .factory('CONFIG', CONFIG);

  /** @ngInject */
  function CONFIG() {
    var service = {
      apiUrl: 'http://localhost/tTableNew/'
    };

    return service;
  }
})();
