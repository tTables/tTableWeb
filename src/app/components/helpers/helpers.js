(function () {
  angular
    .module('tTableNew')
    .factory('Helpers', Helpers);
  
  /** @ngInject */
  function Helpers() {
    var service = {
      checkTimes: checkTimes,
      currentTime:currentTime
    };

    function checkTimes(timeToCompare, startTime, endTime) {
      var currentDate, endTime_MS, endTime_test, startTime_MS, startTime_test, time, timeToCompare_MS, timeToCompare_test, tmp;
      tmp = timeToCompare + ' ' + startTime + ' ' + endTime;
      time = new Date();
      currentDate = (time.getMonth() + 1) + '/' + time.getDate() + '/' + time.getFullYear() + ' ';
      timeToCompare_test = currentDate + timeToCompare;
      startTime_test = currentDate + startTime;
      endTime_test = currentDate + endTime;
      timeToCompare_MS = new Date(timeToCompare_test).getTime();
      startTime_MS = new Date(startTime_test).getTime();
      endTime_MS = new Date(endTime_test).getTime();
      return timeToCompare_MS >= startTime_MS && timeToCompare_MS < endTime_MS;
    }
    
    function currentTime(minutesThreshold) {
      var currentTime, time, currentHour, currentMinute;
      
      time = new Date();
      currentMinute = time.getMinutes();
      currentHour = time.getHours();
      
      currentMinute -= minutesThreshold || 0;
      if(currentMinute < 0) {
        currentHour -= 1;
        currentMinute += 60;
      }
      currentTime = currentHour + ':' + currentMinute;
      
      return currentTime;
    }

    return service;
  }
})();