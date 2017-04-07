angular.module('app', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){

  $stateProvider
      .state('welcome', {
        url: '/',
        templateUrl: '../views/welcome.html'
      })
      .state('home', {
        url: '/home',
        templateUrl: '../views/home.html'
      })
      .state('locations', {
        url: '/locations/:id',
        templateUrl: '../views/locations.html',
        controller: 'infoCtrl'
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
        templateUrl: '../views/planningViews/camping.html'
      })
      .state('rentals', {
        parent: 'planning',
        url: '/rentals',
        templateUrl: '../views/planningViews/rentals.html'
      })

  $urlRouterProvider
    .otherwise('/')

})
