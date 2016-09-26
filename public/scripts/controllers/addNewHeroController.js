myApp.controller('addNewHeroController',['$scope','$http',function($scope,$http){
  console.log('addNewHero controller');

  $scope.addHero = function (){
    var newHero ={
        alias:$scope.heroAlias,
        first_name:$scope.heroFName,
        last_name:$scope.heroLName,
        city:$scope.heroCity,
        power_name:$scope.heroPName
    };//end newhero object
console.log(newHero, 'hero to send');

$http ({
  method: 'POST',
  url: '/newHero',
  data: newHero
}).then(function(response){
  console.log(response, 'from server');
});//end then function

  };
}]);
