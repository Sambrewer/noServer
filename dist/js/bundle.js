'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('welcome', {
    url: '/',
    templateUrl: '../views/welcome.html'
  }).state('home', {
    url: '/home',
    templateUrl: '../views/home.html'
  }).state('landing', {
    url: '/landing',
    templateUrl: '../views/landing.html'
  });

  $urlRouterProvider.otherwise('/');
});
'use strict';

angular.module('app').directive('navBar', function () {
  return {
    restrict: 'E',
    templateUrl: '../views/directive-html/nabBar.html'
  };
});
//# sourceMappingURL=bundle.js.map
