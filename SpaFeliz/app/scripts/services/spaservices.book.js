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

spaServices.$inject = ['$http', '$q', 'httpConfig'];

function spaServicesBook($http, $q, httpConfig) {
 let services = {
    saveBookServices: saveBookServices
  }

  return services;

  function saveBookServices(body){
    var defered = $q.defer();
    var promise = defered.promise;

    const url = httpConfig.url + httpConfig.services.save;
    $http.post(url,body)
      .then(function (data) {
          defered.resolve(data);
          
      })
      .catch(function (error) {
        console.log(error);
        defered.reject(error);

      });
    return promise;
       
  }
}  