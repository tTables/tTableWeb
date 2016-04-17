(function() {
  angular
    .module('tTableNew')
    .factory('Trip', ['$log', '$http', 'CONFIG', 'toastr', Trip]);
  
  /** @ngInject */
  function Trip($log, $http, CONFIG, toastr) {
    var service = {
      getTrip: getTrip
    };
    
    return service;
    
    function getTrip(line, direction, stop, day, trip) {
      return $http.get(CONFIG.apiUrl + 'api/trip/' + line + '/' + direction + '/' + day + '/' + trip)
        .then(getTripComplete)
        .catch(getTripFailed)
      
      function getTripComplete(response) {
        return response.data;
      }
      
      function getTripFailed(error) {
        $log.error('XHR failed for getLines.\n' + angular.toJson(error.data, true));
        toastr.error('Error while downloading departures!<br>Try again later!');
      }
    }
  }
})();