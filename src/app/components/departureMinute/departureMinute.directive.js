(function() {
  angular
    .module('tTableNew')
    .directive('departureMinute', ['Helpers', departureMinute]);
  
  /** @ngInject */
  function departureMinute(Helpers) {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/departureMinute/departureMinute.html',
      scope: {
        departure: '=',
        hour: '=',
        showHour: '='
      },
      link: function(scope, el, attrs) {
        var tmpDate = new Date();
        var currentDeparture = scope.hour + ':' + scope.departure.min;
        var currentTime = tmpDate.getHours() + ':' + tmpDate.getMinutes();
        var nextHour = (tmpDate.getHours() + 1) + ':' + tmpDate.getMinutes();
        
        if(Helpers.checkTimes(currentDeparture, currentTime, nextHour)) {
          el.addClass('next_h');
        } else if(Helpers.checkTimes(currentDeparture, '00:00', currentTime)) {
          el.addClass('passed_h');
        }
      }
    }
    
    return directive;
  }
})();