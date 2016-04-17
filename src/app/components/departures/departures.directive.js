(function() {
  angular
    .module('tTableNew')
    .directive('departures', departuresDirective);
    
    function departuresDirective() {
      return {
        restrict: 'AE',
        replace: true,
        scope: {
          departures: '=times',
          style: '@'
        },
        link: function(scope) {
          scope.getTemplateUrl = function() {
            return 'app/components/departures/departures-' + (scope.style || 1) + '.html'
          };
        },
        template: '<div ng-include="getTemplateUrl()"></div>'
      };
    }
})();