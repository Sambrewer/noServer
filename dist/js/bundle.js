'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('welcome', {
    url: '/',
    templateUrl: '../views/welcome.html'
  }).state('planning', {
    url: '/planning',
    templateUrl: '../views/planning.html'
  }).state('lodging', {
    parent: 'planning',
    url: '/lodging',
    templateUrl: '../views/planningViews/lodging.html',
    controller: "lodgingCtrl"
  }).state('tours', {
    parent: 'planning',
    url: '/tours',
    templateUrl: '../views/planningViews/tours.html',
    controller: 'toursCtrl'
  }).state('camping', {
    parent: 'planning',
    url: '/camping',
    templateUrl: '../views/planningViews/camping.html',
    controller: 'parksCtrl'
  }).state('planner', {
    parent: 'planning',
    url: '/planner/:name',
    templateUrl: '../views/planningViews/planner.html',
    controller: "lodgingCtrl"
  }).state('weather', {
    url: '/weather',
    templateUrl: '../views/weather.html',
    controller: 'weatherCtrl'
  });
  $urlRouterProvider.otherwise('/');
});
'use strict';

angular.module('app').directive('plannerDir', function () {
  return {
    templateUrl: '../views/directive-html/plannerDir.html',
    restrict: 'AE',
    scope: {
      eventp: '=',
      addStuff: '&'
    },
    link: function link(scope, element, attributes) {}
  };
});
'use strict';

angular.module('app').controller('parksCtrl', function ($scope, tabsSvc) {
  $scope.parks = tabsSvc.getParks();
});
'use strict';

angular.module('app').controller('infoCtrl', function ($scope, $stateParams, locationSvc) {
  var locationInfo = locationSvc.getInfo();
  var locationDet = {};
  for (var i = 0; i < locationInfo.length; i++) {
    if (locationInfo[i].id == $stateParams.id) {
      locationDet = locationInfo[i];
      $scope.locInfo = locationDet;
    }
  }
});
'use strict';

angular.module('app').controller('teaserCtrl', function ($scope, locationSvc) {
  $scope.locations = locationSvc.getLocation();
});
'use strict';

angular.module('app').controller('lodgingCtrl', function ($scope, tabsSvc, $stateParams) {
  $scope.listedEvents = tabsSvc.getListedEvents();
  $scope.lodging = tabsSvc.getLodging();
  $scope.list = [];
  console.log($scope.listedEvents);
  for (var i = 0; i < $scope.listedEvents.length; i++) {

    if ($scope.listedEvents[i].name === $stateParams.name) {
      $scope.list.push($scope.listedEvents[i]);
      console.log($scope.listedEvents[i].name, $stateParams.name);
      return $scope.list;
    }
  }
});
'use strict';

angular.module('app').controller('toursCtrl', function ($scope, tabsSvc, $stateParams) {
  $scope.tours = tabsSvc.getTours();
});
'use strict';

angular.module('app').controller('weatherCtrl', function ($scope, weatherSvc) {
  $scope.c = false;
  var weather = {};
  $scope.getWeather = function () {
    weatherSvc.getWeather().then(function (response) {
      $scope.currentWeather = response.weather[0];
      $scope.weatherInfo = response.main;
      console.log(response);
    });
  };
  $scope.changeBackground = function (response) {
    $scope.id = response.weather[0].id;
    $scope.backgroundId = [299, 499, 599, 699, 799, 800];

    $scope.wthrBG = ['https://aos.iacpublishinglabs.com/question/aq/1400px-788px/thunderstorms-made_fdef5d2957edbe09.jpg?domain=cx.aos.ask.com', 'http://www.metoffice.gov.uk/media/image/d/n/light_rain.jpg', 'http://www.artifacting.com/blog/wp-content/uploads/2012/10/Rain-Room.jpg', 'https://www.walldevil.com/wallpapers/a90/fir-tree-forest-snow-winter.jpg', 'https://iamchronicallywell.files.wordpress.com/2014/07/wm-rgp_1641_8739.jpg', 'http://news.bbcimg.co.uk/media/images/65976000/jpg/_65976125_kenearles.jpg', 'http://img10.deviantart.net/b4fc/i/2011/017/c/5/cloudy_sky_stock_by_arwenarts-d25qi7j.jpg'];

    $scope.backgroundId.push($scope.id);
    $scope.bgIndex = $scope.backgroundId.sort().indexOf($scope.id);
    console.log('hi');
  };
  $scope.getWeather();
  console.log($scope.currentWeather);
});
'use strict';

angular.module('app').controller('welcomeCtrl', function ($scope) {
    $scope.bgimg = "../../images/archBack.jpg";
});
'use strict';

angular.module('app').directive('footerDir', function () {
  return {
    restrict: 'AE',
    templateUrl: '../views/directive-html/footer.html'
  };
});
'use strict';

angular.module('app').directive('imgDir', function () {
  return {
    restrict: 'AE',
    link: function link(scope, element, attributes) {
      element.on('mouseover', function () {
        element.css('opacity', '1');
      });
      element.on('mouseleave', function () {
        element.css('opacity', '0.8');
      });
      element.on('mouseover', function () {
        element.css('color', 'brown');
      });
      element.on('mouseleave', function () {
        element.css('color', '#444');
      });
    }
  };
});
'use strict';

angular.module('app').directive('navBar', function () {
  return {
    restrict: 'AE',
    templateUrl: "../views/directive-html/navBar.html"
  };
});
'use strict';

angular.module('app').directive('tabChanger', function () {
  return {
    restrict: 'A',
    link: function link(scope, element, attributes) {
      element.on('mouseover', function () {
        element.css('border-left', '5px solid brown').css('border-right', '5px solid brown').css('border-radius', '10px').css('cursor', 'pointer');
      });
      element.on('mouseleave', function () {
        element.css('border', 'none');
      });
      element.on('focus', function () {
        element.css('border-left', '5px solid brown').css('border-right', '5px solid brown').css('border-radius', '10px').css('cursor', 'pointer');
      });
    }
  };
});
'use strict';

angular.module('app').directive('tabsDir', function () {
  return {
    restrict: 'A',
    link: function link(scope, element, attributes) {
      element.on('mouseover', function () {
        element.css('color', 'white');
      });
      element.on('mouseleave', function () {
        element.css('color', '#444');
      });
    }
  };
});
"use strict";
// angular.module('app').directive('wthrBg', function() {
//   return {
//     restrict: 'A',
//     scope: {
//
//     }
//     controller: 'weatherCtrl',
//     link: function(scope, element, attributes) {
//           $(element).css('background-image', 'url(' + scope.backgroundImg[scope.bgIndex] + ')')
//     }
//   };
// })
"use strict";
'use strict';

angular.module('app').service('locationSvc', function () {

  var locations = [{
    id: 1,
    name: 'San Juan River',
    desc: 'A blurb about this location',
    img: '../images/sanjuan.png'
  }, {
    id: 2,
    name: 'Monument Valley',
    desc: 'A blurb about this location',
    img: '../images/monumentvalley.jpg'
  }, {
    id: 3,
    name: 'Bears Ears National Monument',
    desc: 'A blurb about this location',
    img: '../images/bearsears.png'
  }, {
    id: 4,
    name: 'Lake Powell',
    desc: 'A blurb about this location',
    img: '../images/lakepowell.png'
  }, {
    id: 5,
    name: 'Valley of the Gods',
    desc: 'A blurb about this location',
    img: '../images/mokeydugway.png'
  }, {
    id: 6,
    name: 'Ancient Pueblo Ruins',
    desc: 'A blurb about this location',
    img: '../images/lakepowell.png'
  }];
  var locationInfo = [{
    id: 1,
    name: 'San Juan River',
    head: 'A descriptive header',
    desc: 'A paragraph about this location.',
    img: '../images/sanjuan.png'
  }, {
    id: 2,
    name: 'Monument Valley',
    head: 'A descriptive header',
    desc: 'A paragraph about this location.',
    img: '../images/monumentvalley.jpg'
  }, {
    id: 3,
    name: 'Bears Ears National Monument',
    head: 'A descriptive header',
    desc: 'A paragraph about this location.',
    img: '../images/bearsears.png'
  }, {
    id: 4,
    name: 'Lake Powell',
    head: 'A descriptive header',
    desc: 'A paragraph about this location.',
    img: '../images/lakepowell.png'
  }, {
    id: 5,
    name: 'Valley of the Gods',
    head: 'A descriptive header',
    desc: 'A paragraph about this location.',
    img: '../images/mokeydugway.png'
  }, {
    id: 6,
    name: 'Ancient Pueblo Ruins',
    head: 'A descriptive header',
    desc: 'A paragraph about this location.',
    img: '../images/lakepowell.png'
  }];
  this.getLocation = function () {
    return locations;
  };
  this.getInfo = function () {
    return locationInfo;
  };
});
'use strict';

angular.module('app').service('tabsSvc', function () {
  var allEvents = [];
  var lodging = [{
    name: 'Super 8 Blanding',
    img: '../../images/lodging/s8b.jpg',
    address: '755 S Main St, Blanding, UT',
    price: '86',
    rating: '3.7 stars'
  }, {
    name: 'Rodeway Inn(M)',
    img: '../../images/lodging/rwm.png',
    address: '649 N Main St, Monticello, UT',
    price: '100',
    rating: '3.5 stars'
  }, {
    name: 'Inn at the Canyon',
    img: '../../images/lodging/ic.png',
    address: '533 N Main St, Monticello, UT',
    price: '105',
    rating: '4 stars'
  }, {
    name: 'San Juan Inn',
    img: '../../images/lodging/sji.png',
    address: 'US 163, Mexican Hat, UT',
    price: '114',
    rating: '3.7 stars'
  }, {
    name: 'Stone Lizard',
    img: '../../images/lodging/sll.png',
    address: '88 W Center St, Blanding, UT',
    price: '104',
    rating: '4.6 stars'
  }, {
    name: 'Rodeway Inn(B)',
    img: '../../images/lodging/rwb.png',
    address: '711 S Main St, Blanding, UT',
    price: '100',
    rating: '3.4 stars'
  }, {
    name: 'Hat Rock Inn',
    img: '../../images/lodging/hri.png',
    address: '120 US-163, Mexican Hat, UT',
    price: '125',
    rating: '4 stars'
  }, {
    name: 'The View Hotel',
    img: '../../images/lodging/vh.png',
    address: 'Indian Rte 42, Monument Valley, AZ',
    price: '150',
    rating: '4.5 stars'
  }, {
    name: 'Defiance House',
    img: '../../images/lodging/dhl.png',
    address: 'Glen Canyon, Hwy 276, Bullfrog, UT',
    price: '125',
    rating: '4 stars'
  }, {
    name: 'Kokopelli Inn',
    img: '../../images/lodging/ki.png',
    address: '161 Main St, Bluff, UT',
    price: '98',
    rating: '3.9'
  }];
  var tours = [{
    name: 'San Juan',
    img: '../../images/tours/sjt.png',
    desc: 'Float down the mighty San Juan River in a raft, or kayak',
    price: '800',
    strain: '2'
  }, {
    name: 'Jeep Tours',
    img: '../../images/tours/jt.png',
    desc: 'Tour various areas off the beaten path in style',
    price: '600',
    strain: '1'
  }, {
    name: 'Canyoneering',
    img: '../../images/tours/ct.png',
    desc: 'Rapell down through beautiful slot canyons',
    price: '400',
    strain: '4'
  }, {
    name: 'Humvee',
    img: '../../images/tours/hvt.png',
    desc: 'Drive to various ruins in even more style (more referring to quantity)',
    price: '500',
    strain: '2'
  }, {
    name: 'Hikes',
    img: '../../images/tours/ht.png',
    desc: 'Hike to various pueblo ruins scattered all across the county',
    price: '150',
    strain: '3'
  }];
  var monuments = [{
    name: 'Canyon Lands National Park',
    img: '../../images/parks/clm.png'
  }, {
    name: 'Deadhorse Point National Park',
    img: '../../images/parks/dhpm.png'
  }, {
    name: 'Mesa Verde National Park',
    img: '../../images/parks/mvm.png'
  }, {
    name: 'Grand Gulch Monument',
    img: '../../images/parks/ggm.png'
  }, {
    name: 'Hovenweep Ruins',
    img: '../../images/parks/hwm.png'
  }, {
    name: 'Natural Bridges Monument',
    img: '../../images/parks/nbm.png'
  }, {
    name: 'Navajo National Monument',
    img: '../../images/parks/nm.png'
  }, {
    name: 'Rainbow Bridge Monument',
    img: '../../images/parks/rbm.png'
  }, {
    name: 'Bears Ears Monument',
    img: '../../images/parks/bem.png'
  }];
  this.getLodging = function () {
    return lodging;
  };
  this.getTours = function () {
    return tours;
  };
  this.getParks = function () {
    return monuments;
  };
  this.getListedEvents = function () {
    for (var i = 0; i < lodging.length; i++) {
      allEvents.push(lodging[i]);
    }
    for (var j = 0; j < tours.length; j++) {
      allEvents.push(tours[j]);
    }
    for (var k = 0; k < monuments.length; k++) {
      allEvents.push(monuments[k]);
    }
    return allEvents;
    console.log(allEvents);
  };
});
'use strict';

angular.module('app').service('weatherSvc', function ($http) {
  //api key 9aae8058c577305827971b6d7fac0ffc
  this.getWeather = function () {
    return $http.get('http://api.openweathermap.org/data/2.5/weather?zip=84511&units=imperial&appid=9aae8058c577305827971b6d7fac0ffc').then(function (response) {
      console.log(response.data);
      return response.data;
    });
  };
});
//# sourceMappingURL=bundle.js.map
