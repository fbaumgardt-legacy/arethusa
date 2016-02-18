"use strict";

angular.module('arethusa.hello').service('hello', [
    'state',
    'configurator',
    function(state, configurator) {
        var self = this;
        this.name = 'hello';

        this.defaultConf = {
            template: 'js/arethusa.hello/templates/hello.html'
        };

        function configure() {
            configurator.getConfAndDelegate(self);
        }

        this.init = function() {
            configure();
        };
    }
]);