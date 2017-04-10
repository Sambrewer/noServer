angular.module('app').controller('weatherCtrl', function($scope, weatherSvc) {
  $scope.c = false;
  var weather = {};
  $scope.getWeather = function() {
    weatherSvc.getWeather().then(function(response) {
      $scope.currentWeather = response.weather[0];
      $scope.weatherInfo = response.main;
      console.log(response)
    });
  }
  $scope.changeBackground = function(response) {
    $scope.id = response.weather[0].id;
    $scope.backgroundId = [299, 499, 599, 699, 799, 800];

    $scope.wthrBG = [
    'https://aos.iacpublishinglabs.com/question/aq/1400px-788px/thunderstorms-made_fdef5d2957edbe09.jpg?domain=cx.aos.ask.com',
    'http://www.metoffice.gov.uk/media/image/d/n/light_rain.jpg',
    'http://www.artifacting.com/blog/wp-content/uploads/2012/10/Rain-Room.jpg',
    'https://www.walldevil.com/wallpapers/a90/fir-tree-forest-snow-winter.jpg',
    'https://iamchronicallywell.files.wordpress.com/2014/07/wm-rgp_1641_8739.jpg',
    'http://news.bbcimg.co.uk/media/images/65976000/jpg/_65976125_kenearles.jpg',
    'http://img10.deviantart.net/b4fc/i/2011/017/c/5/cloudy_sky_stock_by_arwenarts-d25qi7j.jpg',
  ]

    $scope.backgroundId.push($scope.id);
    $scope.bgIndex = $scope.backgroundId.sort().indexOf($scope.id);
    console.log('hi');
  }
  $scope.getWeather();
  console.log($scope.currentWeather);
})
