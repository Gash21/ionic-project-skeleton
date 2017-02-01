angular.module('starter.routes', ['pascalprecht.translate'])

.config(function ($stateProvider, $urlRouterProvider, $translateProvider, $ionicConfigProvider) {
    // $ionicConfigProvider.tabs.position('top');
    $ionicConfigProvider.navBar.alignTitle("center"); //Places them at the bottom for all OS
    $ionicConfigProvider.navBar.positionPrimaryButtons("left"); //Places them at the bottom for all OS
    $ionicConfigProvider.navBar.positionSecondaryButtons("right"); //Places them at the bottom for all OS
    $translateProvider.useStaticFilesLoader({       
        prefix: 'lang/',
               suffix: '.json'  
    });

    //    $translateProvider.translations('de', {});

    $translateProvider.preferredLanguage('en');
    $translateProvider.useSanitizeValueStrategy('escape');
    $translateProvider.forceAsyncReload(true);

    // Ionic uses AngularUI Router which uses the concept of states
    // Learn more here: https://github.com/angular-ui/ui-router
    // Set up the various states which the app can be in.
    // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
    .state('app', {
      url: '/app',
      abstract: true,
      templateUrl: 'templates/tabs.html'
    })

    .state('app.dash', {
      url: '/dash',
      views: {
        'tab-dash': {
          templateUrl: 'templates/tab-dash.html',
          controller: 'ProjectNewCtrl',
          controllerAs: 'new'
        }
      }
    })

    .state('app.chats', {
        url: '/chats',
        views: {
          'tab-chats': {
            templateUrl: 'templates/tab-chats.html',
            controller: 'ChatsCtrl'
          }
        }
      })
      .state('app.chat-detail', {
        url: '/chats/:chatId',
        views: {
          'tab-chats': {
            templateUrl: 'templates/chat-detail.html',
            controller: 'ChatDetailCtrl'
          }
        }
      })

    .state('app.account', {
      url: '/account',
      views: {
        'tab-account': {
          templateUrl: 'templates/tab-account.html',
          controller: 'AccountCtrl'
        }
      }
    });

    // if none of the above states are matched, use this as the fallback
    $urlRouterProvider.otherwise('/app/dash');

});

    // if none of the above states are matched, use this as the fallback
    // $urlRouterProvider.otherwise(function($injector, $localStorage, $location){
    //     var state = $injector.get('$state');
    //     var storage = $injector.get('$localStorage');
    //     console.log(storage.onBoardingFlag);
    //     if (storage.onBoardingFlag == undefined){
    //         state.go('on-boarding');
    //     } else {
    //         state.go('app.search-services');
    //     }
    // });
