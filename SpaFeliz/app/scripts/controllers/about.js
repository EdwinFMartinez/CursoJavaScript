'use strict';

/**
 * @ngdoc function
 * @name spaFelizApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the spaFelizApp
 */
angular.module('spaFelizApp')
  .controller('AboutCtrl',aboutcontroller); 

  AbortController.$inject = ['$state'];

  function aboutcontroller ($state) {
    this.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
    console.log('id:', $state.params.id);
    
  }
