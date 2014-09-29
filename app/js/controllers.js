'use strict';

/* Controllers */

angular.module('myApp.controllers', [])
	.controller('LandingPageController', [function() {

	}])
	.controller('WaitlistController', ['$scope', '$firebase', function($scope, $firebase) {
		var partiesRef = new Firebase('https://waitand-eat.firebaseio.com/parties');

		$scope.parties = $firebase(partiesRef);
		$scope.newParty = {name: '', phone: '', size: ''};
		
		$scope.saveParty = function() {
			$scope.parties.$add($scope.newParty);
			$scope.newParty = {name: '', phone: '', size: ''};
		};

		$scope.sendTextMessage = function(phoneNumber) {
			var textMessageRef = new Firebase('https://waitand-eat.firebaseio.com/textMessages');
			var textMessages = $firebase(textMessageRef);
			textMessages.$add({phoneNumber: phoneNumber});
		};
		
	}]);
  	