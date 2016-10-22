angular.module('app.routes', ['ionic', 'ngCordova'])

.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider


  .state('menu', {
    url: '/menu',
    templateUrl: 'templates/menu.html',
    controller: 'menuCtrl'
  })

  .state('menu.tabs', {
    url: '/tabs',
    views: {
      'side-menu': {
        templateUrl: 'templates/tabs.html',
        abstract:true
      }
    }
  })

  .state('tabs.connect', {
    url: '/connect',
    views: {
      'tab-connect': {
        templateUrl: 'templates/connect.html',
        controller: 'connectCtrl'
      }
    }
  })

  .state('tabs.messages', {
    url: '/messages',
    views: {
      'tab-messages': {
        templateUrl: 'templates/messages.html',
        controller: 'messagesCtrl'
      }
    }
  })

  .state('tabs.conversation', {
    url: '/conversation/:id',
    views: {
      'tab-convo': {
        templateUrl: 'templates/conversation.html',
        controller: 'conversationCtrl'
      }
    }
  })

  .state('tabs.profile', {
    url: '/profile',
    views: {
      'tab-profile': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('menu.settings', {
    url: '/settings',
    views: {
      'side-menu': {
        templateUrl: 'templates/settings.html',
        controller: 'settingsCtrl'
      }
    }
  })

  .state('menu.eventRegister', {
    url: '/event-reg',
    views: {
      'side-menu': {
        templateUrl: 'templates/eventRegister.html',
        controller: 'eventRegisterCtrl'
      }
    }
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

//$urlRouterProvider.otherwise('/login');
});
