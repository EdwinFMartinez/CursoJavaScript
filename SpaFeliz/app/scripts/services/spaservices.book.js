'use strict';

/**
 * @ngdoc service
 * @name spaFelizApp.spaServices.book
 * @description
 * # spaServices.book
 * Factory in the spaFelizApp.
 * 
 */
angular.module('spaFelizApp').factory('spaServicesBook', spaServicesBook);

spaServices.$inject = [];

function spaServicesBook() {
var services = {
    saveBookServices: saveBookServices
  }

  return services;

  function saveBookServices(body){
       console.log("pruebas");
       
  }
}  