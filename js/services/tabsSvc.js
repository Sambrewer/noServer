angular.module('app').service('tabsSvc', function() {
  var lodging = [
    {
      name: 'Super 8 Blanding',
      address: '755 S Main St, Blanding, UT',
      price: '86',
      rating: '3.7 stars'
    },
    {
      name: 'Rodeway Inns & Suites(Monticello)',
      address: '649 N Main St, Monticello, UT 84535',
      price: '100',
      rating: '3.5 stars'
    },
    {
      name: 'Inn at the Canyon',
      address: '533 N Main St, Monticello, UT 84535',
      price: '105',
      rating: '4 stars'
    },
    {
      name: 'San Juan Inn',
      address: 'US 163 & San Juan River, Mexican Hat, UT 84531',
      price: '114',
      rating: '3.7 stars'
    },
    {
      name: 'Stone Lizard Lodging',
      address: '88 W Center St, Blanding, UT 84511',
      price: '104',
      rating: '4.6 stars'
    },
    {
      name: 'Rodeway Inns & Suites(Blanding)',
      address: '711 S Main St, Blanding, UT 84511',
      price: '100',
      rating: '3.4 stars'
    },
    {
      name: 'Hat Rock Inn',
      address: '120 US-163, Mexican Hat, UT 84531',
      price: '125',
      rating: '4 stars'
    },
    {
      name: 'The View Hotel',
      address: 'Indian Rte 42, Oljato-Monument Valley, AZ 84536',
      price: '150',
      rating: '4.5 stars'
    },
    {
      name: 'Defiance House Lodging',
      address: 'Glen Canyon National Recreation Area, Hwy 276, Bullfrog, UT 84533',
      price: '125',
      rating: '4 stars'
    },
    {
      name: 'Kokopelli Inn',
      address: '161 Main St, Bluff, UT 84512',
      price: '98',
      rating: '3.9'
    },
  ]
  var tours = [
    {
      name: 'San Juan River',
      desc: 'Float down the San Juan River',
      price: '800',
      strain: '2'
    },
    {
      name: 'Jeep Tours',
      desc: 'Tour various areas off the beaten path in style',
      price: '600',
      strain: '1'
    },
    {
      name: 'Canyoneering',
      desc: 'Rapell down through beautiful slot canyons worn smooth by flash floods',
      price: '400',
      strain: '4'
    },
    {
      name: 'Humvee',
      desc: 'Drive to various ruins in even more style',
      price: '500',
      strain: '2'
    },
    {
      name: 'Hikes',
      desc: 'Hike to various pueblo ruins scattered all across the county',
      price: '150',
      strain: '3'
    }
  ]
  this.getLodging = function() {
    return lodging;
  }
  this.getTours = function() {
    return tours;
  }
})
