angular.module('app').directive('tabChanger', function() {
  return {
    restrict: 'A',
    link: function(scope, element, attributes) {
      element.on('mouseover', function() {
        element.css('border-left', '5px solid brown')
        .css('border-right', '5px solid brown')
        .css('border-radius', '10px')
        .css('cursor', 'pointer')
      })
      element.on('mouseleave', function() {
        element.css('border', 'none')
      })
      element.on('focus', function() {
        element.css('border-left', '5px solid brown')
        .css('border-right', '5px solid brown')
        .css('border-radius', '10px')
        .css('cursor', 'pointer')
      })
    }
  }
})
