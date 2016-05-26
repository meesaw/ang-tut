'use strict';

/**
 * @ngdoc overview
 * @name swFrontApp
 * @description
 * # swFrontApp
 *
 * Main module of the application.
 */
angular
  .module('swFrontApp', [
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
      .when('/orgs', {
        templateUrl: 'views/orgs.html',
        controller: 'OrgCtrl',
        controllerAs: 'orgs'
      })
      .when('/edges', {
        templateUrl: 'views/edges.html',
        controller: 'EdgesController',
        controllerAs: 'edg'
        
      })
      .otherwise({
        redirectTo: '/'
      });
  });
