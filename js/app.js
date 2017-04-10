angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

  $stateProvider

      .state('welcome', {
        url: '/',
        templateUrl: '../views/welcome.html'
      })
      .state('planning', {
        url: '/planning',
        templateUrl: '../views/planning.html',
      })
      .state('lodging', {
        parent: 'planning',
        url: '/lodging',
        templateUrl: '../views/planningViews/lodging.html',
        controller: "lodgingCtrl"
      })
      .state('tours', {
        parent: 'planning',
        url: '/tours',
        templateUrl: '../views/planningViews/tours.html',
        controller: 'toursCtrl'
      })
      .state('camping', {
        parent: 'planning',
        url: '/camping',
        templateUrl: '../views/planningViews/camping.html',
        controller: 'parksCtrl'
      })
      .state('planner', {
        parent: 'planning',
        url: '/planner/:name',
        templateUrl: '../views/planningViews/planner.html',
        controller: "lodgingCtrl"
      })
      .state('weather', {
        url: '/weather',
        templateUrl: '../views/weather.html',
        controller: 'weatherCtrl'
      });
  $urlRouterProvider
    .otherwise('/')

})
