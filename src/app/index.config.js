(function() {
  'use strict';

  angular
    .module('tTableNew')
    .config(['$logProvider' , 'toastrConfig', '$translateProvider', config]);

  /** @ngInject */
  function config($logProvider, toastrConfig, $translateProvider) {
    // Enable log
    $logProvider.debugEnabled(true);

    // Set options third-party lib
    toastrConfig.allowHtml = true;
    toastrConfig.timeOut = 3000;
    toastrConfig.positionClass = 'toast-top-right';
    toastrConfig.preventDuplicates = true;
    toastrConfig.progressBar = true;

    // Translate configuration
    var translations_pl = {
      //navbar
      LINES: 'Linie',
      STOPS: 'Przystanki',
      SETTINGS: 'Ustawienia',
      //departures
      DEPARTURES: 'Odjazdy',
      SIGNS: 'Oznaczenia',
      OTHER_LINES: 'Inne linie z tego przystanku',
      ROUTE: 'Trasa',
      VALID: 'Rozkład jazdy ważny od',
      //settings
      SHOW_PAST: 'Pokaż ostatnie odjazdy sprzed',
      MINUTES: 'minut',
      PLAQUE_STYLE: 'Styl tabliczki',
      //stop departures
      SHOW_PAST_DEPARTURES: 'Pokaż poprzednie odjazdy',
      LINE: 'Linia',
      DIRECTION: 'Kierunek',
      DEPARTURE: 'Odjazd',
      //stops
      STOP_NAME: 'Nazwa przystanku',
      SEARCH_STOP: 'Wyszukaj przystanku',
      //trip
      TRIP: 'Trasa przejazdu',
      CLOSE: 'Zamknij',
      //settings
      LANGUAGE: 'Język',
      LANG_EN: 'Angielski',
      LANG_PL: 'Polski',
      SETTINGS_SAVED: 'Pomyślnie zapisano ustawienia!'
    };

    var translations_en = {
      //navbar
      LINES: 'Lines',
      STOPS: 'Stops',
      SETTINGS: 'Settings',
      //departures
      DEPARTURES: 'Departures',
      SIGNS: 'Signs',
      OTHER_LINES: 'Other lines from this stop',
      ROUTE: 'Route',
      VALID: 'Service valid from',
      //settings
      SHOW_PAST: 'Show past departures from',
      MINUTES: 'minutes',
      PLAQUE_STYLE: 'Plaque style',
      //stop departures
      SHOW_PAST_DEPARTURES: 'Show past departures',
      LINE: 'Line',
      DIRECTION: 'Direction',
      DEPARTURE: 'Deparutre',
      //stops
      STOP_NAME: 'Stop name',
      SEARCH_STOP: 'Search stop',
      //trip
      TRIP: 'Trip',
      CLOSE: 'Close',
      //settings
      LANGUAGE: 'Language',
      LANG_EN: 'English',
      LANG_PL: 'Polish',
      SETTINGS_SAVED: 'Settings saved!'
    };

    $translateProvider
      .translations('en', translations_en)
      .translations('pl', translations_pl)
      .preferredLanguage('en')
      .useLocalStorage()
      .useSanitizeValueStrategy(null);
  }

})();
