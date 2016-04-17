(function() {
  angular
    .module('tTableNew')
    .factory('Stops', ['$log', '$http', 'CONFIG', 'toastr', Stops]);
  
  /** @ngInject */
  function Stops($log, $http, CONFIG, toastr) {
    var service = {
      getStops: getStops,
      getDepartures: getDepartures
    };
    
    return service;
    
    function getStops() {
      return $http.get(CONFIG.apiUrl + 'api/stops')
        .then(getStopsComplete)
        .catch(getStopsFailded)
      
      function getStopsComplete(response) {
        return response.data;
      }
      
      function getStopsFailded(error) {
        $log.error('XHR failed for getStops.\n' + angular.toJson(error.data, true));
      }
    }
    
    function getDepartures(stop) {
      return $http.get(CONFIG.apiUrl + 'api/stops/' + stop)
        .then(getDeparturesComplete)
        .catch(getDeparturesFailded)
      
      function getDeparturesComplete(response) {
        return response.data;
      }
      
      function getDeparturesFailded(error) {
        $log.error('XHR failed for getDepartures.\n' + angular.toJson(error.data, true));
        toastr.error('Error while downloading stops!<br>Try again later!');
      }
    }
  }
})();