'use strict';

/**
 * @ngdoc service
 * @name spaFelizApp.spaServices.factory
 * @description
 * # spaServices.factory
 * Factory in the spaFelizApp.
 * 
 * Nos permite compartir parametros entre controladores y solo se instancian una ves
 * Esta es la mejor implementacion, no usar rootScope
 */
angular.module('spaFelizApp').factory('spaServices', spaServices);

spaServices.$inject = [];

function spaServices() {
/*var dataServices = [
    {
      id: 1, name: 'Masaje sencillo', cost: '60,000', description: '30 minutos de un genial masaje sin final feliz',
      endHappy: false, image: 'https://pur.vamtam.com/wp-content/uploads/2017/12/pic7.jpg'
    },
    {
      id: 2, name: 'Exfoliación', cost: '100,000', description: '30 minutos de una maravillosa Exfoliación',
      endHappy: false, image: 'https://pur.vamtam.com/wp-content/uploads/2017/12/pic7.jpg'
    },
    {
      id: 3, name: 'Masaje completo', cost: '130,000', description: '1 hora de un genial masaje cuerpo a cuerpo con un super final feliz',
      endHappy: true, image: 'https://pur.vamtam.com/wp-content/uploads/2017/12/pic7.jpg'
    }
  ]*/
  var services = {
    getAllServices: getAllServicesMethod,
    getServicesById: getServicesById
  }
  return services;


  function getAllServicesMethod() {
    return dataServices;
  }

  function getServicesById(id) {
    for (var i = 0; i < dataServices.length; i++) {
      if (id == dataServices[i].id) return dataServices[i];
    }
    return null;
  }
}
