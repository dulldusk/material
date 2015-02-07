(function () {
  'use strict';
  angular
      .module('material.components.autocomplete')
      .directive('mdHighlightText', MdHighlight);

  function MdHighlight () {
    return { controller: 'MdHighlightCtrl' };
  }
})();
