(function() {
  angular.module('tTableNew').directive('loader', loader);
  
  function loader() {
    var directive = {
      restict: 'E',
      templateUrl: 'app/components/loader/loader.html',
      scope: {
        loading: '='
      }
    }
    
    return directive;
  }
})();