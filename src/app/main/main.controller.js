(function () {
    angular
        .module('tTableNew')
        .controller('MainController', ['toastr', '$localStorage', function(toastr, $localStorage) { 
          var vm = this; 
          
          vm.$storage = $localStorage.$default({
            minutesThreshold: 10,
            plaqueStyle: {
              name: 'Indexed',
              number: 1
            }
          });
        }]);
})();
