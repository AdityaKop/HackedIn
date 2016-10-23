angular.module('SimpleRESTIonic.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider



  .state('tabsController.connect', {
    url: '/connect',
    views: {
      'tab-connect': {
        templateUrl: 'templates/connect.html',
        controller: 'connectCtrl'
      }
    }
  })

  .state('tabsController.conversation', {
    url: '/conversation/:id',
    views: {
      'tab-messaging': {
        templateUrl: 'templates/tab-messaging.html',
        controller: 'conversationCtrl'
      }
    }
  })

  .state('tabsController.profile', {
    url: '/profile',
    views: {
      'tab-profile': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('signup', {
    url: '/signup',
    templateUrl: 'templates/signup.html',
    controller: 'signupCtrl'
  })

  .state('settings', {
    url: '/settings',
    templateUrl: 'templates/settings.html',
    controller: 'settingsCtrl'
  })

  .state('eventRegister', {
    url: '/event-reg',
    templateUrl: 'templates/eventRegister.html',
    controller: 'eventRegisterCtrl'
  })

  .state('tabsController.messages', {
    url: '/messages',
    views: {
      'tab2': {
        templateUrl: 'templates/messages.html',
        controller: 'messagesCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/login')



});
