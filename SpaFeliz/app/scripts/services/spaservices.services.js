'use strict';

/**
 * @ngdoc service
 * @name spaFelizApp.spaServices.services
 * @description
 * # spaServices.services
 * Service in the spaFelizApp.
 */
angular.module('spaFelizApp').service('spaServicesHttp', spaServicesHttp);

spaServicesHttp.$inject = ['$http', '$q', 'httpConfig'];

function spaServicesHttp($http, $q, httpConfig) {
  let services = {
    getAll: getAll,
    getById: getById
  }

  return services;

  function getAll() {
    var defered = $q.defer();
    var promise = defered.promise;


    const url = httpConfig.url + httpConfig.services.all;
    $http.get(url)
      .then(function (data) {
        console.log(data);
        defered.resolve(data);
      })
      .catch(function (error) {
        console.log(error);
        defered.reject(error);

      });
    return promise;
  }


  function getById(id) {
    var defered = $q.defer();
    var promise = defered.promise;

    const url = httpConfig.url + httpConfig.services.byId + id;
    $http.get(url)
      .then(function (data) {
        console.log(data);
        defered.resolve(data);
      })
      .catch(function (error) {
        console.log(error);
        defered.reject(error);
      });
    return promise;
  }
}
