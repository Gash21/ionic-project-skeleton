// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', [
  'ionic',
  'ngResource',
  'ngStorage',
  'starter.config',
  'starter.services.api',
  'starter.routes',
  'starter.controllers',
  'starter.projects.new',
  'starter.projects.archive',
  'starter.projects.process',
  'starter.auth.login',
  'starter.auth.register',
  'starter.auth.forgot',
])

.run(function($ionicPlatform, api, $localStorage, APP_CONFIG) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(false);
      cordova.plugins.Keyboard.disableScroll(true);
    }

    // Set App Version on localStorage
    if(!$localStorage.appVersion || $localStorage !== APP_CONFIG.version){
      $localStorage.appVersion = APP_CONFIG.version;
    }

    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
});
