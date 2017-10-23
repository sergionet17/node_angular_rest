angular.module('demo', [])
.controller('Hello', function($scope, $http) {
    $http.get('http://192.168.3.128:8080/campana/3').
        then(function(response) {
            $scope.campana = response.data;
            console.log(response.data);  		
        });
});
