(function() {
  angular
    .module('tTableNew')
    .controller('StopsController', ['Stops', StopsController]);
  
  /** @ngInject */
  function StopsController(Stops) {
    var vm = this; 
    
    vm.loading = true;
    vm.stops = [];
    
    Stops.getStops().then(function(result) {
      vm.stops = result;
    }).finally(function() {
      vm.loading = false;
    });
  }
})();