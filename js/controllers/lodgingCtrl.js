angular.module('app').controller('lodgingCtrl', function($scope, tabsSvc){
  $scope.lodging = tabsSvc.getLodging();
  $scope.test = "hello";
  console.log($scope.lodging)
})
