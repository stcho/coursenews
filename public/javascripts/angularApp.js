var app = angular.module('courseNews', []);

app.controller('MainController', [
'$scope',
function($scope){
  $scope.test = 'Hello world!';
  $scope.posts = [
		{title: 'post 1', upvotes: 5},
		{title: 'post 2', upvotes: 3},
		{title: 'post 3', upvotes: 7},
		{title: 'post 4', upvotes: 8},
		{title: 'post 5', upvotes: 4}
  ]
}]);