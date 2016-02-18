"use strict";

// This directive is temporarily renamed to commentsX because of
// https://github.com/latin-language-toolkit/arethusa/issues/384

angular.module('arethusa.hello').directive('helloX', [
    'state',
    'configurator',
    function(state, configurator) {
        return {
            restrict: 'A',
            scope: {
            },
            compile: function(tElement, tAttrs, transclude) {
                return {
                    pre: function(scope, iElement, iAttrs) {
                    },
                    post: function(scope, iElement, iAttrs) {
                    }
                };
            },
            templateUrl: 'js/arethusa.hello/templates/hello.html'
        };
    }
]);