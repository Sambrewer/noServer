angular.module('app').controller('toursCtrl', function($scope, tabsSvc) {
  $scope.tours = tabsSvc.getTours();
  console.log($scope.tours)
})
