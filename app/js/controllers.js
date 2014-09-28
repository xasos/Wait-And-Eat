'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('LandingPageController', [function() {

	}])
	.controller('WaitlistController', ['$scope', '$firebase', function($scope, $firebase) {
		var partiesRef = new Firebase('https://waitand-eat.firebaseio.com/');

		$scope.parties = $firebase(partiesRef);
		$scope.party = {name: '', phone: '', size: ''};
		
		$scope.saveParty = function() {
			$scope.parties.$add($scope.party);
			$scope.party = {};
		};
	}]);
  	