"use strict";

angular.module('arethusa.core').directive('translateLanguage', [
  '$translate',
  'translator',
  function($translate, translator) {
    return {
      restrict: 'A',
      scope: {},
      link: function(scope, element, attrs) {
        function useKey(key) {
          scope.langKey = key || $translate.use();
          $translate.use(scope.langKey);
        }

        var langs = ['en', 'de'];

        function toggleLang() {
          var i;
          i = langs.indexOf(scope.langKey) + 1;
          i = i > langs.length - 1 ? 0 : i;
          useKey(langs[i]);
        }

        element.bind('click', function() {
          scope.$apply(toggleLang);
        });

        var parent = element.parent();
        translator('language', function(translation) {
          parent.attr('title', translation);
        });

        useKey();
      },
      templateUrl: 'templates/arethusa.core/translate_language.html'
    };
  }
]);
