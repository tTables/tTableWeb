(function() {
  angular
    .module('tTableNew')
    .controller('SettingsController', ['$localStorage', 'toastr', '$translate', function($localStorage, toastr, $translate) {
      var vm = this;
      var SETTINGS_SAVED;

      $translate('SETTINGS_SAVED').then(function(text) {
        SETTINGS_SAVED = text;
      });

      vm.minutes = [0, 5, 10, 15, 20, 30, 60];
      vm.plaquesStyles = [
        {
          name: 'Indexed',
          number: 1
        },
        {
          name: 'Horizontal',
          number: 2
        },
        {
          name: 'Vertical',
          number: 3
        }
      ];
      vm.languages = [
        {
          key: 'pl',
          name: 'LANG_PL'
        },
        {
          key: 'en',
          name: 'LANG_EN'
        }
      ];

      vm.language = $translate.use();

      vm.saved = function() {
        toastr.success(SETTINGS_SAVED);
      };

      vm.saveLang = function() {
        $translate.use(vm.language.key);
        $translate('SETTINGS_SAVED').then(function(text) {
          SETTINGS_SAVED = text;
          vm.saved();
        });
      };

      vm.$storage = $localStorage.$default({
        minutesThreshold: 10,
        plaqueStyle: {
          name: 'Indexed',
          number: 1
        }
      });
    }]);
})();
