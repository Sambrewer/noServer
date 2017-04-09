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
    templateUrl: '../views/planningViews/camping.html',
    controller: 'parksCtrl'
  }).state('rentals', {
    parent: 'planning',
    url: '/rentals',
    templateUrl: '../views/planningViews/rentals.html'
  });

  $urlRouterProvider.otherwise('/');
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

angular.module('app').directive('tabsDir', function () {
  return {
    restrict: 'A'

  };
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
    img: '../../images/lodging/s8b.jpg',
    address: '755 S Main St, Blanding, UT',
    price: '86',
    rating: '3.7 stars'
  }, {
    name: 'Rodeway Inns & Suites(Monticello)',
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
    name: 'Stone Lizard Lodging',
    img: '../../images/lodging/sll.png',
    address: '88 W Center St, Blanding, UT',
    price: '104',
    rating: '4.6 stars'
  }, {
    name: 'Rodeway Inns & Suites(Blanding)',
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
    name: 'Defiance House Lodging',
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
    name: 'San Juan River',
    img: '../../images/tours/sjt.png',
    desc: 'Float down the mighty San Juan River in a raft, or inflatable kayak',
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
    name: 'Grand Gulch National Monument',
    img: '../../images/parks/ggm.png'
  }, {
    name: 'Hovenweep National Monument',
    img: '../../images/parks/hwm.png'
  }, {
    name: 'Natural Bridges National Monument',
    img: '../../images/parks/nbm.png'
  }, {
    name: 'Navajo National Monument',
    img: '../../images/parks/nm.png'
  }, {
    name: 'Rainbow Bridge National Monument',
    img: '../../images/parks/rbm.png'
  }, {
    name: 'Bears Ears National Monument',
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
});
//# sourceMappingURL=bundle.js.map
