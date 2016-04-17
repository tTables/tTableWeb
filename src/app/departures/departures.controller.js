(function() {
  angular
    .module('tTableNew')
    .controller('DeparturesController', ['$stateParams', '$localStorage', 'Departures', DeparturesController]);
  
  /** @ngInject */
  function DeparturesController($stateParams, $localStorage, Departures) {
    var vm = this; 
    
    vm.loading = true;
    vm.departures = [];
    vm.line = $stateParams.line;
    vm.direction = $stateParams.direction;
    vm.stop = $stateParams.stop;
    vm.plaqueStyle = $localStorage.plaqueStyle;
    
    Departures.getDepartures($stateParams.line, $stateParams.direction, $stateParams.stop).then(function(result) {
      vm.departures = result;
    }).finally(function() {
      vm.loading = false;
    });

  }
})();