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
    restrict: 'AE',
    templateUrl: "../views/directive-html/navBar.html"
  };
});
'use strict';

angular.module('app').controller('welcomeCtrl', function ($scope) {
    $scope.bgimg = "../../images/archBack.jpg";
});
//# sourceMappingURL=bundle.js.map
