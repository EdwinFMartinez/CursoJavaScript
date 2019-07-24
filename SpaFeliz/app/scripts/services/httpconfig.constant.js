'use strict';

/**
 * @ngdoc service
 * @name spaFelizApp.httpConfig.constant
 * @description
 * # httpConfig.constant
 * Constant in the spaFelizApp.
 */
angular.module('spaFelizApp')
  .constant('httpConfig', {
    url: '//localhost:3000/',

    services: {
      all: 'services',
      byId: 'services/'
    }
  });
