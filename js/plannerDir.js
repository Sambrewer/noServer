angular.module('app').directive('plannerDir', function() {
  return {
    templateUrl: '../views/directive-html/plannerDir.html',
    restrict: 'AE',
    scope: {
      eventp: '=',
      addStuff: '&'
    },
    link: function(scope, element, attributes) {

    }
  }
})
