angular.module('app').directive('imgDir', function() {
  return {
    restrict: 'AE',
    link: function(scope, element, attributes) {
      element.on('mouseover', function() {
        element.css('opacity', '1')
      });
      element.on('mouseleave', function() {
        element.css('opacity', '0.8')
      });
    }
  }
});
