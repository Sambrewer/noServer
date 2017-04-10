angular.module('app').service('locationSvc', function(){

  var locations =[
    {
      id: 1,
      name: 'San Juan River',
      desc: 'A blurb about this location',
      img: '../images/sanjuan.png'
    },
    {
      id: 2,
      name: 'Monument Valley',
      desc: 'A blurb about this location',
      img: '../images/monumentvalley.jpg'
    },
    {
      id: 3,
      name: 'Bears Ears National Monument',
      desc: 'A blurb about this location',
      img: '../images/bearsears.png'
    },
    {
      id: 4,
      name: 'Lake Powell',
      desc: 'A blurb about this location',
      img: '../images/lakepowell.png'
    },
    {
      id: 5,
      name: 'Valley of the Gods',
      desc: 'A blurb about this location',
      img: '../images/mokeydugway.png'
    },
    {
      id: 6,
      name: 'Ancient Pueblo Ruins',
      desc: 'A blurb about this location',
      img: '../images/lakepowell.png'
    },
  ];
  var locationInfo = [
    {
      id: 1,
      name: 'San Juan River',
      head: 'A descriptive header',
      desc: 'A paragraph about this location.',
      img: '../images/sanjuan.png'
    },
    {
      id: 2,
      name: 'Monument Valley',
      head: 'A descriptive header',
      desc: 'A paragraph about this location.',
      img: '../images/monumentvalley.jpg'
    },
    {
      id: 3,
      name: 'Bears Ears National Monument',
      head: 'A descriptive header',
      desc: 'A paragraph about this location.',
      img: '../images/bearsears.png'
    },
    {
      id: 4,
      name: 'Lake Powell',
      head: 'A descriptive header',
      desc: 'A paragraph about this location.',
      img: '../images/lakepowell.png'
    },
    {
      id: 5,
      name: 'Valley of the Gods',
      head: 'A descriptive header',
      desc: 'A paragraph about this location.',
      img: '../images/mokeydugway.png'
    },
    {
      id: 6,
      name: 'Ancient Pueblo Ruins',
      head: 'A descriptive header',
      desc: 'A paragraph about this location.',
      img: '../images/lakepowell.png'
    }
  ]
  this.getLocation = function() {
    return locations;
  }
  this.getInfo = function() {
    return locationInfo;
  }
})
