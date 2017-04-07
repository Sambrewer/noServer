angular.module('app').controller('teaserCtrl', function($scope, locationSvc) {
  $scope.locations = locationSvc.getLocation();
})
