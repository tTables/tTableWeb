(function() {
  angular
    .module('tTableNew')
    .factory('StopsAll', ['$log', '$http', 'CONFIG', 'toastr', function($log, $http, CONFIG, toastr) {
      var service = {
        getStopsAll: getStopsAll
      };
      
      return service;
      
      function getStopsAll(stopId) {
        return $http.get(CONFIG.apiUrl + 'api/stops/all/' + stopId)
          .then(getStopsAllComplete)
          .catch(getStopsAllFailed);
        
        function getStopsAllComplete(response) {
          return response.data;
        }
        function getStopsAllFailed() {
          $log.error('XHR failed for getStopsAll.\n' + angular.toJson(error.data, true));
        }
      }
    }]);
})();