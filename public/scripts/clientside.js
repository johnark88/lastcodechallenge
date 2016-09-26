console.log('sourced');

var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider){
  console.log('NG ');
    $routeProvider.
      when("/home", {
        templateUrl: "/partials/home.html",
        controller: "homeController"
      }).
      when("/add", {
        templateUrl: "/partials/addNewHero.html",
        controller: "addNewHeroController"
      }).
      otherwise({
        redirectTo: "/home"
      });
}]);
