angular.module('alPractice', ['ngRoute', 'alMain', 'alProfile'])
  .config(['$routeProvider',function($routeProvider) {
    $routeProvider.
      when('/', {
        templateUrl: 'components/main/main.html',
        controller: 'MainController'
      }).
      when('/profile/:name', {
        templateUrl: 'components/profile/profile.html',
        controller: 'ProfileController'
      }).
      otherwise({
        redirectTo: '/'
      });
}]);

