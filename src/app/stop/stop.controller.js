(function() {
  angular
    .module('tTableNew')
    .controller('StopController', ['$stateParams', '$state', '$localStorage', 'Stops', 'Helpers', StopController]);
  
  /** @ngInject */
  function StopController($stateParams, $state, $localStorage, Stops, Helpers) {
    var vm = this;
    var minutesThreshold = $localStorage.minutesThreshold;
    
    vm.showTrip = function(stop, line, direction, daytype, trip) {
      $state.go('stop.trip', {stop:stop, line:line, direction: direction, day: daytype, trip: trip});
    };
    
    vm.toggleShowPast = function() {
      vm.showPast = !vm.showPast;
    };
    
    vm.checkTimes = Helpers.checkTimes;
    
    vm.stop = $stateParams.stop;
    vm.loading = true;
    vm.departures = [];
    vm.showPast = false;
    vm.currentTime = Helpers.currentTime(minutesThreshold);
    
    Stops.getDepartures(vm.stop).then(function(result) {
      vm.departures = result;
    }).finally(function() {
      vm.loading = false;
    });
  }
})();