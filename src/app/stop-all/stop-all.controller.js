(function() {
  angular
    .module('tTableNew')
    .controller('StopAllController', ['$stateParams', '$state', '$localStorage', 'StopsAll', 'Helpers', function($stateParams, $state, $localStorage, StopsAll, Helpers) {
      var vm = this;
      var minutesThreshold = $localStorage.minutesThreshold;

      vm.showTrip = function(stop, line, direction, daytype, trip) {
        $state.go('stop.trip', {stop:stop, line:line, direction: direction, day: daytype, trip: trip});
      };

      vm.checkTimes = Helpers.checkTimes;
      
      vm.stop = $stateParams.stop;
      vm.loading = true;
      vm.departures = [];
      vm.showPast = false;
      vm.currentTime = Helpers.currentTime(minutesThreshold);
      
      StopsAll.getStopsAll(vm.stop).then(function(result) {
        vm.departures = result.departures;
        vm.stopName = result.stop_name;
        console.log(vm.departures);
      }).finally(function() {
        vm.loading = false;
      });
    }]);
})();