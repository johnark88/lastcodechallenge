
myApp.controller('homeController',['$scope','$http',function($scope,$http){
  console.log('Home controller');
  $scope.allHeros =[];
  $http({
    method: 'GET',
    url: '/getheros'
  }).then(function(response){
    $scope.allHeros = response.data;
    console.log($scope.allHeros);
  });

}]);
