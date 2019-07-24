'use strict';

/**
 * @ngdoc function
 * @name spaFelizApp.controller:DetailCtrl
 * @description
 * # DetailCtrl
 * Controller of the spaFelizApp
 */
angular.module('spaFelizApp').controller('DetailCtrl',detailCtrl);

detailCtrl.$inject = ['spaServicesHttp', '$stateParams'];

function detailCtrl(spaServicesHttp,$stateParams){
  var vm = this;
  vm.$onInit = onInit;
  vm.mynombre = 'Felipe Martinez';
  vm.loadSpaServices = loadSpaServices;
  vm.id = $stateParams.id;
  function onInit(){
    loadSpaServices();
  }

  function loadSpaServices(){
    console.log("Entro a spaService del detail");
    console.log('spaServicesHttp:',spaServicesHttp);
    spaServicesHttp.getById(vm.id)
    .then(function(result) {
      vm.service = result.data;  
    })
    .catch(function (err){
       console.log(err);
    })
      
    console.log(vm.service);
  }
}
