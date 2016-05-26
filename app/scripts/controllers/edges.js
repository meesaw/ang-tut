'use strict';

/**
 * @ngdoc function
 * @name swFrontApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the swFrontApp
 */
angular.module('swFrontApp')
  .controller('EdgesController', function ($scope,edges) {
  	$scope.edges = edges.query();
  	

  	var selectedEdge = null;


  	$scope.isSelected = function(edge){
  		return (selectedEdge === edge ) ;
  	};

  	$scope.selectEdge = function(edge)
  	{
  		selectedEdge =  (selectedEdge === edge ) ? null : edge;
  	};

  	$scope.displayRequirements = function(reqs) {

  		var result ='';
  		for(var i=0;i<reqs.length; i++)
  		{
  			result += reqs[i].name + ' '+ reqs[i].value;
  		}
  		return result;

  	};
    
  	

  });