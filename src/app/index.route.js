(function () {
  'use strict';

  angular
    .module('tTableNew')
    .config(['$stateProvider', '$urlRouterProvider', routerConfig]);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state('home', {
        url: '/',
        templateUrl: 'app/main/main.html',
        controller: 'MainController',
        controllerAs: 'main'
      });

    $stateProvider
    //TODO move to modal
      .state('lines', {
        url: '/lines',
        templateUrl: 'app/lines/lines.html',
        controller: 'LinesController',
        controllerAs: 'vm'
      });

    $stateProvider
      .state('line', {
        url: '/line/:line',
        templateUrl: 'app/line/line.html',
        controller: 'LineController',
        controllerAs: 'line'
      });

    $stateProvider
      .state('departures', {
        url: '/departures/:line/:direction/:stop',
        templateUrl: 'app/departures/departures.html',
        controller: 'DeparturesController',
        controllerAs: 'departures'
      });
      
    $stateProvider
      .state('departures.trip', {
        url: '/trip/:day/:trip',
        onEnter: function($modal, $state) {
          var modal = $modal.open({
            templateUrl: 'app/trip/trip.html',
            controller: 'TripController',
            controllerAs: 'vm'
          });
          
          modal.result.finally(function() {
            $state.go('^');
          });
        }
      });

    $stateProvider
      .state('stops', {
        url: '/stops',
        templateUrl: 'app/stops/stops.html',
        controller: 'StopsController',
        controllerAs: 'vm'
      });

    $stateProvider
      .state('stop', {
        url: '/stop/:stop',
        templateUrl: 'app/stop/stop.html',
        controller: 'StopController',
        controllerAs: 'stop'
      });
      
   $stateProvider
    .state('stop-all', {
      url: '/stop/all/:stop',
      templateUrl: 'app/stop-all/stop-all.html',
      controller: 'StopAllController',
      controllerAs: 'stop'
    });
      
    $stateProvider
      .state('stop.trip', {
        url: '/trip/:line/:direction/:day/:trip',
        onEnter: function($modal, $state) {
          var modal = $modal.open({
            templateUrl: 'app/trip/trip.html',
            controller: 'TripController',
            controllerAs: 'vm'
          });
          
          modal.result.finally(function() {
            $state.go('^');
          });
        }
      });
      
    $stateProvider
      .state('settings', {
        url: '/settings',
        templateUrl: 'app/settings/settings.html',
        controller: 'SettingsController',
        controllerAs: 'settings'
      });

    $urlRouterProvider.otherwise('/');
  }

})();