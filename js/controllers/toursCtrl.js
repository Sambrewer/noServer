angular.module('app').controller('toursCtrl', function($scope, tabsSvc, $stateParams) {
  $scope.tours = tabsSvc.getTours();
  
})
