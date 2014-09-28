'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('LandingPageController', [function() {

	}])
	.controller('WaitlistController', ['$scope', function($scope) {
		$scope.parties = [];
		$scope.party = {name: '', phone: '', size: ''};
	}]);
  