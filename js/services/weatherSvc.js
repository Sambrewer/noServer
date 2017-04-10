angular.module('app').service('weatherSvc', function($http) {
  //api key 9aae8058c577305827971b6d7fac0ffc
  this.getWeather = function() {
    return $http.get('http://api.openweathermap.org/data/2.5/weather?zip=84511&units=imperial&appid=9aae8058c577305827971b6d7fac0ffc').then(function(response){
      console.log(response.data);
      return response.data;
    })
  }
})
