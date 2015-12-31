var app = angular.module('courseNews', []);

app.controller('MainController', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
}]);