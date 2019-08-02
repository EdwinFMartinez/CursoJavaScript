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
  

  bookcontrollerCtrl.$inject = ['spaServicesHttp','spaServicesBook'];

  function bookcontrollerCtrl(spaServicesHttp, spaServicesBook) {
    
    var vm = this;
    vm.$onInit = onInit;
    vm.form = {};
    vm.submitbook = submitbook;
    vm.loadSpaServiceshttp = loadSpaServiceshttp;
    vm.submitbook = submitbook;

    function onInit(){
      vm.loadSpaServiceshttp();
    }

    function submitbook(){
      console.log('ENTRO AL SUBMITTTTTTTTTTTTTTT');
      spaServicesBook.saveBookServices(vm.form)
      .then(function(result){
        alert("Reserva Exitosa");
      })
      .catch(function(err){
         console.log(err);
      });
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

 
