// Ionic template App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'SimpleRESTIonic' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('SimpleRESTIonic', ['ionic', 'backand', 'SimpleRESTIonic.controllers', 'SimpleRESTIonic.services'])

    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
            // for form inputs)
            if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
                cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
                cordova.plugins.Keyboard.disableScroll(true);

            }
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleLightContent();
            }
        });
    })
    .config(function (BackandProvider, $stateProvider, $urlRouterProvider, $httpProvider) {

        BackandProvider.setAppName('hackedin'); // change here to your app name
        BackandProvider.setSignUpToken('a5f3a4e3-fc59-404e-8538-396ee5f64cae'); //token that enable sign up. see http://docs.backand.com/en/latest/apidocs/security/index.html#sign-up
        BackandProvider.setAnonymousToken('21dc82f5-f76b-48cc-962f-b5664774a56b'); // token is for anonymous login. see http://docs.backand.com/en/latest/apidocs/security/index.html#anonymous-access

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

    .run(function ($rootScope, $state, LoginService, Backand) {

        function unauthorized() {
            console.log("user is unauthorized, sending to login");
            $state.go('menu.login');
        }

        function signout() {
            LoginService.signout();
        }

        $rootScope.$on('unauthorized', function () {
            unauthorized();
        });

        $rootScope.$on('$stateChangeSuccess', function (event, toState) {
            if (toState.name == 'menu.login') {
                signout();
            }
            else if (toState.name != 'menu.login' && Backand.getToken() === undefined) {
                unauthorized();
            }
        });
    });
