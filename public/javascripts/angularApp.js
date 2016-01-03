var app = angular.module('courseNews', ['ui.router']);

app.config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/home',
      templateUrl: '/home.html',
      controller: 'MainController'
    })
    .state('posts', {
    	url: '/posts/{id}',
    	templateUrl: '/posts.html',
    	controller: 'PostController'
    })

  $urlRouterProvider.otherwise('home');
}]);

app.factory('posts', [function(){
	var object = {
		posts: [
			{title: 'post 1', upvotes: 5},
			{title: 'post 2', upvotes: 3},
			{title: 'post 3', upvotes: 7},
			{title: 'post 4', upvotes: 8},
			{title: 'post 5', upvotes: 4}
	  ]
	};
	return object;
}])

app.controller('MainController', ['$scope', 'posts', function($scope, posts){
    $scope.posts = posts.posts;
	
	$scope.addPost = function() {
		if(!$scope.title || $scope.title === '') { return; }
		$scope.posts.push({
			title: $scope.title, 
			link: $scope.link,
			upvotes: 0,
			comments: [
				{author: 'James', body: 'Nice post man!', upvotes: 0},
				{author: 'Greg', body: 'Good try but not even close', upvotes: 1}
			]
		});
		$scope.title = '';
		$scope.link = '';
	};

	$scope.incrementUpvotes = function(post) {
		post.upvotes += 1;
	};
}]);

app.controller('PostController', ['$scope','$stateParams', 'posts', function($scope, $stateParams, posts){
	$scope.post = posts.posts[$stateParams.id];
}]);