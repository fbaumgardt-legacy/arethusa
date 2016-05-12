angular.module('arethusa.core').directive('arethusaStandalone',
    function() {
        return {
            controller: 'ArethusaCtrl',
            scope: true,
            template: '\
                <div>\
                  <!--arethusa-navbar></arethusa-navbar-->\
                  <div\
                    ng-include="gS.layout.template"\
                     class="fade slow" id="arethusa_place">\
                  </div>\
                </div>\
        <!--script type="text/javascript">\
            startArethusa();\
        </script-->\
              '
            /*link: function (scope) {
                $http.get(scope.conf).then(function (res) {
                    configurator.defineConfiguration(res.data, scope.conf);
                    alert("OK");
                });
            }*/
        }
    }
);