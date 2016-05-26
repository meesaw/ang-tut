'use strict'

angular.module('swFrontApp').service('edges',function(){
this.query = function()
{
	return [
  		{
  			name : 'Attractive',
  			description: 'Sharper Edges',
  			category: {
  				name : 'Background'
  			},
  			requirements: [
  			{
  				name: 'Bloomfield',
  				value: 'Fairfax'
  			}
  			]
  		}
  	];
}
});