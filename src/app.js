require('./posts')
//require('steemjs-lib')
angular.module('vardyger', [
  'ionic',                  // inject the Ionic framework
  'pascalprecht.translate'  // inject the angular-translate module
])
  .config(function($ionicConfigProvider, $stateProvider,
    $urlRouterProvider, $translateProvider) {

    $translateProvider
      .useStaticFilesLoader({
        prefix: 'locales/',
        suffix: '.json'
      })
      .registerAvailableLanguageKeys(['en', 'ru'], {
        'en' : 'en', 'en_GB': 'en', 'en_US': 'en',
        'ru' : 'ru', 'ru_RU': 'ru', 'ru_RU': 'ru'
      })
      .preferredLanguage('en')
      .fallbackLanguage('ru')
      .determinePreferredLanguage()
      .useSanitizeValueStrategy('escapeParameters');
