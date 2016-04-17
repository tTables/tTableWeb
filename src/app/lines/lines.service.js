(function() {
  angular
    .module('tTableNew')
    .factory('Lines', ['$log', '$http', 'CONFIG', 'toastr', Lines]);
  
  /** @ngInject */
  function Lines($log, $http, CONFIG, toastr) {
    var service = {
      getLines: getLines,
      getLineRoute: getLineRoute
    };
    
    return service;
    
    function getLines() {
      return $http.get(CONFIG.apiUrl + 'api/lines')
        .then(getLinesComplete)
        .catch(getLinesFailed)
      
      function getLinesComplete(response) {
        return response.data;
      }
      
      function getLinesFailed(error) {
        $log.error('XHR failed for getLines.\n' + angular.toJson(error.data, true));
      }
    }
    
    function getLineRoute(line) {
      return $http.get(CONFIG.apiUrl + 'api/lines/' + line)
        .then(getLineRouteComplete)
        .catch(getLineRouteFailed)
      
      function getLineRouteComplete(response) {
        return response.data;
      }
      
      function getLineRouteFailed(error) {
        $log.error('XHR failed for getLineRoute.\n' + angular.toJson(error.data, true));
        toastr.error('Error while downloading lines!<br>Try again later!');
      }
    }
  }
})();