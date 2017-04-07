'use strict';

angular.module('app', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

  $stateProvider.state('welcome', {
    url: '/',
    templateUrl: '../views/welcome.html'
  }).state('home', {
    url: '/home',
    templateUrl: '../views/home.html'
  }).state('locations', {
    url: '/locations/:id',
    templateUrl: '../views/locations.html',
    controller: 'infoCtrl'
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
    templateUrl: '../views/planningViews/camping.html'
  }).state('rentals', {
    parent: 'planning',
    url: '/rentals',
    templateUrl: '../views/planningViews/rentals.html'
  });

  $urlRouterProvider.otherwise('/');
});
'use strict';

angular.module('app').directive('navBar', function () {
  return {
    restrict: 'AE',
    templateUrl: "../views/directive-html/navBar.html"
  };
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

angular.module('app').controller('lodgingCtrl', function ($scope, tabsSvc) {
  $scope.lodging = tabsSvc.getLodging();
  $scope.test = "hello";
  console.log($scope.lodging);
});
'use strict';

angular.module('app').controller('toursCtrl', function ($scope, tabsSvc) {
  $scope.tours = tabsSvc.getTours();
  console.log($scope.tours);
});
'use strict';

angular.module('app').controller('welcomeCtrl', function ($scope) {
    $scope.bgimg = "../../images/archBack.jpg";
});
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
    desc: 'A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location.',
    img: '../images/sanjuan.png'
  }, {
    id: 2,
    name: 'Monument Valley',
    head: 'A descriptive header',
    desc: 'A paragraph about this location A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location.',
    img: '../images/monumentvalley.jpg'
  }, {
    id: 3,
    name: 'Bears Ears National Monument',
    head: 'A descriptive header',
    desc: 'A paragraph about this location A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location.',
    img: '../images/bearsears.png'
  }, {
    id: 4,
    name: 'Lake Powell',
    head: 'A descriptive header',
    desc: 'A paragraph about this location A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location.',
    img: '../images/lakepowell.png'
  }, {
    id: 5,
    name: 'Valley of the Gods',
    head: 'A descriptive header',
    desc: 'A paragraph about this location A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location.',
    img: '../images/mokeydugway.png'
  }, {
    id: 6,
    name: 'Ancient Pueblo Ruins',
    head: 'A descriptive header',
    desc: 'A paragraph about this location A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location. A paragraph about this location.',
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
  var lodging = [{
    name: 'Super 8 Blanding',
    address: '755 S Main St, Blanding, UT',
    price: '86',
    rating: '3.7 stars'
  }, {
    name: 'Rodeway Inns & Suites(Monticello)',
    address: '649 N Main St, Monticello, UT 84535',
    price: '100',
    rating: '3.5 stars'
  }, {
    name: 'Inn at the Canyon',
    address: '533 N Main St, Monticello, UT 84535',
    price: '105',
    rating: '4 stars'
  }, {
    name: 'San Juan Inn',
    address: 'US 163 & San Juan River, Mexican Hat, UT 84531',
    price: '114',
    rating: '3.7 stars'
  }, {
    name: 'Stone Lizard Lodging',
    address: '88 W Center St, Blanding, UT 84511',
    price: '104',
    rating: '4.6 stars'
  }, {
    name: 'Rodeway Inns & Suites(Blanding)',
    address: '711 S Main St, Blanding, UT 84511',
    price: '100',
    rating: '3.4 stars'
  }, {
    name: 'Hat Rock Inn',
    address: '120 US-163, Mexican Hat, UT 84531',
    price: '125',
    rating: '4 stars'
  }, {
    name: 'The View Hotel',
    address: 'Indian Rte 42, Oljato-Monument Valley, AZ 84536',
    price: '150',
    rating: '4.5 stars'
  }, {
    name: 'Defiance House Lodging',
    address: 'Glen Canyon National Recreation Area, Hwy 276, Bullfrog, UT 84533',
    price: '125',
    rating: '4 stars'
  }, {
    name: 'Kokopelli Inn',
    address: '161 Main St, Bluff, UT 84512',
    price: '98',
    rating: '3.9'
  }];
  var tours = [{
    name: 'San Juan River',
    desc: 'Float down the San Juan River',
    price: '800',
    strain: '2'
  }, {
    name: 'Jeep Tours',
    desc: 'Tour various areas off the beaten path in style',
    price: '600',
    strain: '1'
  }, {
    name: 'Canyoneering',
    desc: 'Rapell down through beautiful slot canyons worn smooth by flash floods',
    price: '400',
    strain: '4'
  }, {
    name: 'Humvee',
    desc: 'Drive to various ruins in even more style',
    price: '500',
    strain: '2'
  }, {
    name: 'Hikes',
    desc: 'Hike to various pueblo ruins scattered all across the county',
    price: '150',
    strain: '3'
  }];
  this.getLodging = function () {
    return lodging;
  };
  this.getTours = function () {
    return tours;
  };
});
//# sourceMappingURL=bundle.js.map
