'use strict';
// Hm how to implement ng-show here?!
// Right now we determine this through a function call - so
// we cannot watch a simple expression.
angular.module('arethusa.hist').directive('historyRedo', [
  'history',
  function (history) {
    return {
      restrict: 'A',
      link: function (scope, element, attrs) {
        element.bind('click', function () {
          history.redo();
          scope.$apply();
        });
      }
    };
  }
]);