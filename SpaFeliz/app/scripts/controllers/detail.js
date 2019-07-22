'use strict';

/**
 * @ngdoc function
 * @name spaFelizApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the spaFelizApp
 */
angular.module('spaFelizApp').controller('DetailCtrl',detailCtrl);

mainCtrl.$inject = ['spaServices'];

function detailCtrl(spaServices){
  var detailController = this;
  detailController.$onInit = onInit;
  vm.mynombre = 'Felipe Martinez';
  vm.loadSpaServices = loadSpaServices;


  function loadSpaServices(){
    detailController.serviceList = spaServices.getServicesById(1);
    console.log(detailController.serviceList);
  }
}
