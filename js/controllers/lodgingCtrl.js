angular.module('app').controller('lodgingCtrl', function($scope, tabsSvc, $stateParams){
  $scope.listedEvents =  tabsSvc.getListedEvents();
  $scope.lodging = tabsSvc.getLodging();
  $scope.activities = tabsSvc.getTours();
  $scope.parks = tabsSvc.getParks();
  // $scope.listedEvents.push($scope.lodging)
  // $scope.listedEvents.push($scope.activities)
  // $scope.conditions = $stateParams;
  console.log($stateParams.name + " HELLO");
  $scope.list = [];
  // $scope.addStuff = function() {
    for (var i = 0; i < $scope.listedEvents.length; i++) {
      if ($scope.listedEvents[i].name === $stateParams.name) {
        $scope.list.push($scope.listedEvents[i]);
        return $scope.list;
    }
  }
  // console.log($stateParams.name);
  // console.log($scope.list)
  // console.log($scope.listedEvents);
// }()

})
