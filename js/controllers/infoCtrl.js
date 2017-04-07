angular.module('app').controller('infoCtrl', function($scope, $stateParams, locationSvc){
  var locationInfo = locationSvc.getInfo();
  var locationDet = {};
  for (var i = 0; i < locationInfo.length; i++) {
    if (locationInfo[i].id == $stateParams.id) {
      locationDet = locationInfo[i];
      $scope.locInfo = locationDet;
    }
  }
})
