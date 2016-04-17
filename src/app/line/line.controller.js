(function() {
  angular
    .module('tTableNew')
    .controller('LineController', ['$stateParams', 'Lines', LineController]);
  
  /** @ngInject */
  function LineController($stateParams, Lines) {
    var vm = this;
    
    vm.loading = true;
    vm.routes = [];
    
    Lines.getLineRoute($stateParams.line).then(function(result) {
      vm.routes = result;
    }).finally(function() {
      vm.loading = false;
    });
  } 
})();