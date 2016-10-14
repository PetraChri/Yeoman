'use strict';

/**
 * @ngdoc overview
 * @name petrachrisostomakiApp
 * @description
 * # petrachrisostomakiApp
 *
 * Main module of the application.
 */
angular
  .module('petrachrisostomakiApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
    .when('/other', {
        templateUrl: 'views/other.html',
        controller: 'petraCtrl',
        controllerAs: 'other'
      })
      .otherwise({
        redirectTo: '/'
      });

  });
