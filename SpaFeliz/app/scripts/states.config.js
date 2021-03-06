'use strict';

angular.module('spaFelizApp').config(settings);

settings.$inject=['$stateProvider', '$urlRouterProvider'];

function settings($stateProvider, $urlRouterProvider){

    var homeState = {
        abstract:true,
        name:'home',
        templateUrl:'views/home.html'
    }
    var mainState = {
        name:'home.main',
        url:'/',
        templateUrl:'views/main.html',
        controller: 'MainCtrl as vm'
    }

    var aboutState = {
        name:'home.about',
        url:'/about',
        templateUrl:'views/about.html',
        controller:'AboutCtrl as vm' 
    }

    var detailState = {
        name:'home.detail',
        url:'/detail/{id}',
        templateUrl:'views/detail.html',
        controller:'DetailCtrl as vm'
    }

    var bookState = {
        name:'home.book',
        url:'/book',
        templateUrl:'views/book.html',
        controller:'BookcontrollerCtrl as vm'
    }

    $stateProvider.state(homeState);
    $stateProvider.state(mainState);
    $stateProvider.state(aboutState);
    $stateProvider.state(detailState);
    $stateProvider.state(bookState);


    $urlRouterProvider.when('','/');
}