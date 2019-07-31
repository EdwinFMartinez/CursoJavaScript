'use strict';

/**
 * @ngdoc function
 * @name spaFelizApp.controller:BookcontrollerCtrl
 * @description
 * # BookcontrollerCtrl
 * Controller of the spaFelizApp
 */
angular.module('spaFelizApp')
  .controller('BookcontrollerCtrl',bookcontrollerCtrl);
  

  bookcontrollerCtrl.$inject = ['spaServicesHttp'];

  function bookcontrollerCtrl(spaServicesHttp) {
    
    var vm = this;
    vm.$onInit = onInit;
    vm.submitbook = submitbook;
    vm.loadSpaServiceshttp = loadSpaServiceshttp;

    function onInit(){
      vm.loadSpaServiceshttp();
    }

    function submitbook(){
      console.log('ENTRO AL SUBMITTTTTTTTTTTTTTT');
      
    }

    function loadSpaServiceshttp(){
      spaServicesHttp.getAll()
      .then(function(result){
        vm.serviceList = result.data;
      })
      .catch(function(err){
         console.log(err);
         
      });
    }
    
  }

 
