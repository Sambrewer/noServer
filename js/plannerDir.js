angular.module('app').directive('plannerDir', function() {
  return {
    templateUrl: '../views/directive-html/plannerDir.html',
    restrict: 'AE',
    controller: function($scope, tabsSvc) {
        $scope.getPlaces = tabsSvc.getLodging();

    },
    scope: {
      eventp: '=',
      addEvent: '&'
    },
    link: function(scope, element, attributes) {
      // var list = document.getElementById('#eventList')
      (element).on('click', function () {
        var newEvent = element.parent().clone()
        $('.eventList').append(newEvent);
        console.log($('.eventList'))
      })
    }
  }
})
