var arethusaBS = function(id,config,appUrl) {

    var Loader = function () { }
    Loader.prototype = {
        require: function (scripts, callback) {
            this.loadCount      = 0;
            this.totalRequired  = scripts.length;
            this.callback       = callback;

            for (var i = 0; i < scripts.length; i++) {
                this.writeScript(scripts[i]);
            }
        },
        loaded: function (evt) {
            this.loadCount++;

            if (this.loadCount == this.totalRequired && typeof this.callback == 'function') this.callback.call();
        },
        writeScript: function (src) {
            var self = this;
            var s = document.createElement('script');
            s.type = "text/javascript";
            s.async = true;
            s.src = src;
            s.addEventListener('load', function (e) { self.loaded(e); }, false);
            var head = document.getElementsByTagName('head')[0];
            head.appendChild(s);
        }
    }

    if (!appUrl) {appUrl = "http://localhost:8090"};

    var anchor = document.getElementById(id);
    var l = new Loader();
    var deps = ['/arethusa.min.css',
        '/vendor/foundation-icons/foundation-icons.css',
        '/vendor/font-awesome-4.1.0/css/font-awesome.min.css',
        '/vendor/angular-foundation-colorpicker/css/colorpicker.css',
        '/arethusa_packages.concat.js',
        '/arethusa.min.js'
    ].map(function(location) {
        var conf = location.endsWith("css") ? {tag:"link", attrK:"rel", attrV:"stylesheet", srcK:"href", srcV:appUrl+location} : {tag:"script", attrK:"type", attrV:"application/javascript", srcK:"src", srcV:appUrl+location};
        var element = document.createElement(conf.tag);
        element.setAttribute(conf.attrK,conf.attrV);
        element.setAttribute(conf.srcK,conf.srcV);
        return element;
    });

    for (var i=0; i++; i < deps.length) {
        var cb = (i+1 < deps.length) ? function() { anchor.appendChild(deps[i+1]) } : continueBS;
        deps[i].addEventListener("load", cb, false);
    };

    anchor.appendChild(deps[0]);

    function continueBS() {
    var template = document.createElement("div");
        template.setAttribute("ng-include",'gS.layout.template');
        template.setAttribute("class",'fade slow');
        anchor.appendChild(template);

    var arethusa = angular.module('arethusa');
    var arethusa_core = angular.module('arethusa.core');
    arethusa.value('CONF_PATH',appUrl+"/configs");
    arethusa.value('BASE_PATH',appUrl);
    arethusa_core.value('BASE_PATH',appUrl);

    var target = angular.element(id);
    target.attr('ng-controller','ArethusaCtrl');
    var injector = angular.bootstrap(id,['arethusa']);
    var configurator = injector.get('configurator');
    configurator.defineConfiguration(config);
    }
};