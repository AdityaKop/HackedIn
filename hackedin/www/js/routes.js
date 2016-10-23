angular.module('SimpleRESTIonic.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
  // ROUTING

      .state('menu', {
        //This is the menu that basically covers everything
          url: '/menu',
          abstract: true,
          templateUrl: 'templates/side-menu.html'
      })

      .state('login', {
        //This is for the login
          url: '/login',
          templateUrl: 'templates/root-login.html',
          controller: 'LoginCtrl as login'
      })

      .state('menu.setting', {
        //
        url: '/setting',
        views: {
            'right_side': {
                templateUrl:'templates/setting.html'
            }
        }
      })

      .state('menu.home', {
        //This html includes all the possible tabs
          url: '/home',
          abstract: true,
          views: {
              'right_side': {
                  templateUrl: 'templates/home.html'
              }
          }
      })

      .state('menu.event-registration', {
          url: '/event-registration',
          views: {
              'right_side': {
                  templateUrl: 'templates/event-registration.html'
            }
          }
      })

      .state('menu.home.tab-connect', {
          url: '/connect',
          views: {
              'tab-connect': {
                  templateUrl: 'templates/tab-connect.html',
                  // controller: 'DashboardCtrl as vm'
              }
          }
      })

      .state('menu.home.tab-messaging', {
          url: '/messaging',
          views: {
              'tab-messaging': {
                  templateUrl: 'templates/tab-messaging.html',
                  controller: 'MessageCtrl as messagectrl'
              }
          }
      })

      .state('menu.home.tab-profile', {
          url: '/profile',
          views: {
              'tab-profile': {
                  templateUrl: 'templates/tab-profile.html',
                  controller: 'ProfileCtrl as profilectrl'
              }
          }
      })

  $urlRouterProvider.otherwise('/login');
  $httpProvider.interceptors.push('APIInterceptor');
})
