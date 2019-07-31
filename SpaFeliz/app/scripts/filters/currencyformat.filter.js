'use strict';

/**
 * @ngdoc filter
 * @name spaFelizApp.filter:currencyFormat.filter
 * @function
 * @description
 * # currencyFormat.filter
 * Filter in the spaFelizApp.
 */
angular.module('spaFelizApp').filter('currencyFormat',currencyFormatFilter);

function currencyFormatFilter () {
    return function (value) {
      return value.toLocaleString();
    };
  }
