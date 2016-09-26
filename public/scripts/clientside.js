console.log('sourced');

var myApp = angular.module('myApp', ['ngRoute']);
myApp.controller('basicHome',['$scope','$http', function($scope, $http){
  console.log('NG');
  

}]);

myApp.config(['$routeProvider', function($routeProvider){
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
