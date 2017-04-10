angular.module('app').directive('tabsDir', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attributes) {
      element.on('mouseover', function() {
        element.css('color', 'white')
      })
      element.on('mouseleave', function(){
        element.css('color', '#444')
      })
    }
  }
})
