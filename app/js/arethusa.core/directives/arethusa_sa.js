angular.module('arethusa.core').directive('arethusaStandalone',['$http','configurator',
    function($http,configurator) {
        return {
            restrict: 'E',
            scope: {
                conf: "@"
            },
            template: '\
                <div>\
                  <!--arethusa-navbar></arethusa-navbar-->\
                  <div\
                    ng-include="gS.layout.template"\
                     class="fade slow">\
                  </div>\
                </div>\
              ',
            link: function (scope) {
                $http.get(scope.conf).then(function (res) {
                    configurator.defineConfiguration(res.data, scope.conf);
                });
            }
        }
    }
]);