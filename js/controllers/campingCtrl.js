angular.module('app').controller('parksCtrl', function($scope, tabsSvc) {
  $scope.parks = tabsSvc.getParks();
})
