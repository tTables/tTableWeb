(function() {
  angular
    .module('tTableNew')
    .controller('LinesController', ['Lines', LinesController]);
  
  /** @ngInject */
  function LinesController(Lines) {
    var vm = this;
    vm.lines = [];
    vm.loading = true;
    
    Lines.getLines().then(function(result) {
      vm.lines = result;
    }).finally(function() {
      vm.loading = false;
    });
  }
})();