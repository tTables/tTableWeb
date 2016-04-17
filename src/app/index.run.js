(function() {
  'use strict';

  angular
    .module('tTableNew')
    .run(['$log', runBlock]);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
