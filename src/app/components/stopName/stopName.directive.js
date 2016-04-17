(function() {
  angular
    .module('tTableNew')
    .directive('stopName', stopName);
  
  /** @ngInject */
  function stopName() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/stopName/stopName.html',
      scope: {
        stop: '='
      }
    }
    
    return directive;
  }
})();