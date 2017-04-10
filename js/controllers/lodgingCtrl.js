angular.module('app').controller('lodgingCtrl', function($scope, tabsSvc, $stateParams){
  $scope.listedEvents =  tabsSvc.getListedEvents();
  $scope.lodging = tabsSvc.getLodging();
  $scope.list = [];
  console.log($scope.listedEvents)
    for (var i = 0; i < $scope.listedEvents.length; i++) {

      if ($scope.listedEvents[i].name === $stateParams.name) {
        $scope.list.push($scope.listedEvents[i]);
        console.log($scope.listedEvents[i].name, $stateParams.name);
        return $scope.list;
    }
  }
})
