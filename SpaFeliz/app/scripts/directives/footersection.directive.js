'use strict';

/**
 * @ngdoc directive
 * @name spaFelizApp.directive:footerSection.directive
 * @description
 * # footerSection.directive
 */
angular.module('spaFelizApp').directive('footerSection',footerSection); 



/* transclude permite adicionar el footer con datos que necesito eespecificos para alguna parte de la pagina */
function footerSection () {
   var directive = {
     //template: '<div><ng-transclude></ng-transclude></div>',
     templateUrl:'./views/partial.footer.html',
     restrict: 'EAC',
     link: link,
     transclude: true
   };

   return directive;

   function link(scope,element,attrs){
    //element.text('this si the footerSection.directive directive');
    scope.team = attrs.author;
  }

  }

 