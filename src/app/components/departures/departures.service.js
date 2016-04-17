(function() {
  angular
    .module('tTableNew')
    .factory('Departures', ['$log', '$http', 'CONFIG', 'toastr', Departures]);
  
  /** @ngInject */
  function Departures($log, $http, CONFIG, toastr) {
    var service = {
      getDepartures: getDepartures
    };
    
    return service;
    
    function getDepartures(line, direction, stop) {
      return $http.get(CONFIG.apiUrl + 'api/departures/' + line + '/' + direction + '/' + stop)
        .then(getDeparturesComplete)
        .catch(getDeparturesFailded)
      
      function getDeparturesComplete(response) {
        return response.data;
      }
      
      function getDeparturesFailded(error) {
        $log.error('XHR failed for getDepartures.\n' + angular.toJson(error.data, true));
        toastr.error('Error while downloading departures!<br>Try again later!');
      }
    }
  }
})();