angular.module('app').service('tabsSvc', function() {
  var allEvents = [];
  var lodging = [
    {
      name: 'Super 8 Blanding',
      img: '../../images/lodging/s8b.jpg',
      address: '755 S Main St, Blanding, UT',
      price: '86',
      rating: '3.7 stars'
    },
    {
      name: 'Rodeway Inn(M)',
      img: '../../images/lodging/rwm.png',
      address: '649 N Main St, Monticello, UT',
      price: '100',
      rating: '3.5 stars'
    },
    {
      name: 'Inn at the Canyon',
      img: '../../images/lodging/ic.png',
      address: '533 N Main St, Monticello, UT',
      price: '105',
      rating: '4 stars'
    },
    {
      name: 'San Juan Inn',
      img: '../../images/lodging/sji.png',
      address: 'US 163, Mexican Hat, UT',
      price: '114',
      rating: '3.7 stars'
    },
    {
      name: 'Stone Lizard',
      img: '../../images/lodging/sll.png',
      address: '88 W Center St, Blanding, UT',
      price: '104',
      rating: '4.6 stars'
    },
    {
      name: 'Rodeway Inn(B)',
      img: '../../images/lodging/rwb.png',
      address: '711 S Main St, Blanding, UT',
      price: '100',
      rating: '3.4 stars'
    },
    {
      name: 'Hat Rock Inn',
      img: '../../images/lodging/hri.png',
      address: '120 US-163, Mexican Hat, UT',
      price: '125',
      rating: '4 stars'
    },
    {
      name: 'The View Hotel',
      img: '../../images/lodging/vh.png',
      address: 'Indian Rte 42, Monument Valley, AZ',
      price: '150',
      rating: '4.5 stars'
    },
    {
      name: 'Defiance House',
      img: '../../images/lodging/dhl.png',
      address: 'Glen Canyon, Hwy 276, Bullfrog, UT',
      price: '125',
      rating: '4 stars'
    },
    {
      name: 'Kokopelli Inn',
      img: '../../images/lodging/ki.png',
      address: '161 Main St, Bluff, UT',
      price: '98',
      rating: '3.9'
    },
  ]
  var tours = [
    {
      name: 'San Juan',
      img: '../../images/tours/sjt.png',
      desc: 'Float down the mighty San Juan River in a raft, or kayak',
      price: '800',
      strain: '2'
    },
    {
      name: 'Jeep Tours',
      img: '../../images/tours/jt.png',
      desc: 'Tour various areas off the beaten path in style',
      price: '600',
      strain: '1'
    },
    {
      name: 'Canyoneering',
      img: '../../images/tours/ct.png',
      desc: 'Rapell down through beautiful slot canyons',
      price: '400',
      strain: '4'
    },
    {
      name: 'Humvee',
      img: '../../images/tours/hvt.png',
      desc: 'Drive to various ruins in even more style (more referring to quantity)',
      price: '500',
      strain: '2'
    },
    {
      name: 'Hikes',
      img: '../../images/tours/ht.png',
      desc: 'Hike to various pueblo ruins scattered all across the county',
      price: '150',
      strain: '3'
    }
  ]
  var monuments = [
    {
      name: 'Canyon Lands National Park',
      img: '../../images/parks/clm.png'
    },
    {
      name: 'Deadhorse Point National Park',
      img: '../../images/parks/dhpm.png'
    },
    {
      name: 'Mesa Verde National Park',
      img: '../../images/parks/mvm.png'
    },
    {
      name: 'Grand Gulch Monument',
      img: '../../images/parks/ggm.png'
    },
    {
      name: 'Hovenweep Ruins',
      img: '../../images/parks/hwm.png'
    },
    {
      name: 'Natural Bridges Monument',
      img: '../../images/parks/nbm.png'
    },
    {
      name: 'Navajo National Monument',
      img: '../../images/parks/nm.png'
    },
    {
      name: 'Rainbow Bridge Monument',
      img: '../../images/parks/rbm.png'
    },
    {
      name: 'Bears Ears Monument',
      img: '../../images/parks/bem.png'
    }
  ]
  this.getLodging = function() {
    return lodging;
  }
  this.getTours = function() {
    return tours;
  }
  this.getParks = function() {
    return monuments;
  }
  this.getListedEvents = function() {
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
    console.log(allEvents)
  }
})
