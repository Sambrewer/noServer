angular.module('app').directive('plannerDir', function() {
  return {
    restrict: 'A',
    scope: {
      addEvent: '&'
    },
    link: function(scope, element, attributes) {
      (element).on('click', function () {
        $(this).innerHtml('.day')
      })
    }
  }
})
