var myApp =  angular.module('myApp',[]); 

myApp.controller('myAppController',['$scope', '$http', function ($scope, $http, myAppService) { 

    $scope.hu = [];

    $scope.init = function() { 

        $http.get('http://localhost:9000/mainchart').then(function(result) { $scope.hu = result.data; });
    } 
     
    $scope.init(); 

}]);



