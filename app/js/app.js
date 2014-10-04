'use strict';


// Declare app level module which depends on filters, and services
angular.module('myApp', [
  'ngRoute',
  'myApp.filters',
  'myApp.services',
  'myApp.directives',
  'myApp.controllers',
  'firebase'
]).
// config(['$routeProvider', '$locationProvider', function($routeProvider, $locationProvider) {
//   $locationProvider.html5Mode(true);
//   $routeProvider.when('/', {templateUrl: 'partials/landing_page.html', controller: 'LandingPageController'});
//   $routeProvider.when('/waitlist', {templateUrl: 'partials/waitlist.html', controller: 'WaitlistController'});
//   $routeProvider.otherwise({redirectTo: '/'});
// }]);
config(['$routeProvider', function($routeProvider, $locationProvider) {
  $routeProvider.when('/', {templateUrl: 'partials/landing_page.html', controller: 'LandingPageController'});
  $routeProvider.when('/waitlist', {templateUrl: 'partials/waitlist.html', controller: 'WaitlistController'});
  $routeProvider.when('/register', {templateUrl: 'partials/register.html', controller: 'AuthController'});
  $routeProvider.when('/login', {templateUrl: 'partials/login.html', controller: 'AuthController'});
  $routeProvider.otherwise({redirectTo: '/'});
}]);
