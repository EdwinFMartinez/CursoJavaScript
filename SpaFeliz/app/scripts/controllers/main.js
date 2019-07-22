'use strict';


/**
 * @ngdoc function
 * @name spaFelizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spaFelizApp
 */
angular.module('spaFelizApp').controller('MainCtrl',mainCtrl);

mainCtrl.$inject = ['spaServices'];

function  mainCtrl(spaServices) {

  var vm = this;
  vm.$onInit = onInit;
   vm.mynombre = 'Felipe Martinez';
   vm.loadSpaServices = loadSpaServices;

   function onInit(){
     console.log('Hola XD')
     vm.loadSpaServices();
   }

   function loadSpaServices(){
     vm.serviceList = spaServices.getAllServices();
     console.log(vm.serviceList);
   }

  }
