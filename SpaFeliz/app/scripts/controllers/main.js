'use strict';


/**
 * @ngdoc function
 * @name spaFelizApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the spaFelizApp
 */
angular.module('spaFelizApp').controller('MainCtrl',mainCtrl);

mainCtrl.$inject = ['spaServices','spaServicesHttp'];

function  mainCtrl(spaServices,spaServicesHttp) {

  var vm = this;
  vm.$onInit = onInit;
   vm.mynombre = 'Felipe Martinez';
   vm.loadSpaServices = loadSpaServices;
   vm.loadSpaServicesHttp = loadSpaServicesHttp;

   function onInit(){
    // vm.loadSpaServices();
     vm.loadSpaServicesHttp();
   }

   function loadSpaServices(){
     vm.serviceList = spaServices.getAllServices();
     console.log(vm.serviceList);
   }

   function loadSpaServicesHttp(){
     console.log('spaServicesHttp started');
     spaServicesHttp.getAll()
     .then(function(result){
          console.log("respuesta =>"+ result.data);
          vm.serviceList = result.data;
     })
     .catch(function(err){
      console.log(err);
      
     });
     console.log('spaServicesHttp ended');
     
   }

  }
