'use strict';

/**
 * @ngdoc function
 * @name swFrontApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the swFrontApp
 */
angular.module('swFrontApp').directive('navbar', function () {
    return { 
   	restrict: 'E',
    templateUrl: 'views/navbar.html',
    controller: 'NavigationController'
    }
  });