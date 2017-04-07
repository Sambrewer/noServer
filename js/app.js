angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
      .state('welcome', {
        url: ('/'),
        templateUrl: ('../views/welcome.html')
      })
      .state('home', {
        url: ('/home'),
        templateUrl: ('../views/home.html')
      })
      .state('landing', {
        url: ('/landing'),
        templateUrl: ('../views/landing.html'),
      });

  $urlRouterProvider
    .otherwise('/')

})
