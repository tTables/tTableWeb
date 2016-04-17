// $modalInstance.close

(function() {
  angular
    .module('tTableNew')
    .controller('TripController', ['$stateParams', '$modalInstance', 'Trip', TripController]);
  
  /** @ngInject */
  function TripController($stateParams, $modalInstance, Trip) {
    var vm = this;
    vm.trip = [];
    vm.loading = true;
    vm.line = $stateParams.line;
    vm.direction = $stateParams.direction;
    vm.stop = $stateParams.stop;
    vm.day = $stateParams.day;
    
    vm.close = function() {
      $modalInstance.close();
    };
    
    Trip.getTrip($stateParams.line, $stateParams.direction, $stateParams.stop, $stateParams.day, $stateParams.trip).then(function(result) {
      vm.trip = result;
    }).finally(function() {
      vm.loading = false;
    });
  }
})();