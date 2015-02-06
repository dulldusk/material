(function () {
  'use strict';
  angular
      .module('material.components.autocomplete')
      .directive('mdAutocomplete', MdAutocomplete);

  function MdAutocomplete () {
    return {
      template: '\
        <md-autocomplete-wrap role="listbox">\
          <input type="text"\
              ng-model="searchText"\
              ng-keydown="$mdAutocompleteCtrl.keydown($event)"\
              placeholder="{{placeholder}}"\
              aria-label="{{placeholder}}"\
              aria-autocomplete="list"\
              aria-haspopup="true"\
              aria-activedescendant=""\
              aria-expanded="{{!$mdAutocompleteCtrl.hidden}}"\
              ng-keydown="$mdAutocompleteCtrl.onKeydown($event)"/>\
          <button\
              type="button"\
              ng-if="searchText"\
              ng-click="$mdAutocompleteCtrl.clear()">\
              <span aria-hidden="true">X</span>\
              <span class="visuallyhidden">Clear</span>\
              </button>\
          <md-progress-linear ng-if="$mdAutocompleteCtrl.loading" md-mode="indeterminate"></md-progress-linear>\
        </md-autocomplete-wrap>\
        <ul role="presentation">\
          <li ng-repeat="(index, item) in $mdAutocompleteCtrl.matches"\
              ng-class="{ selected: index === $mdAutocompleteCtrl.index }"\
              ng-if="searchText && !$mdAutocompleteCtrl.hidden"\
              ng-click="$mdAutocompleteCtrl.select(index)"\
              ng-transclude\
              md-list-item="$mdAutocompleteCtrl.itemName">\
          </li>\
        </ul>\
        <aria-status\
            class="visuallyhidden"\
            aria-atomic="true"\
            role="status"\
            aria-live="polite">\
          <p ng-repeat="item in $mdAutocompleteCtrl.matches">{{item.display}}</p>\
        </aria-status>',
      transclude: true,
      controller: 'MdAutocompleteCtrl',
      controllerAs: '$mdAutocompleteCtrl',
      scope: {
        searchText: '=mdSearchText',
        selectedItem: '=mdSelectedItem',
        itemsExpr: '@mdItems',
        itemText: '@mdItemText',
        placeholder: '@placeholder'
      }
    };
  }
})();
