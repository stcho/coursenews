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
			{id: 1, title: 'post 1', upvotes: 5},
			{id: 2, title: 'post 2', upvotes: 3},
			{id: 3, title: 'post 3', upvotes: 7},
			{id: 4, title: 'post 4', upvotes: 8},
			{id: 5, title: 'post 5', upvotes: 4}
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
	// $scope.post = posts.posts[$stateParams.id];
	window.posts = posts.posts
	$scope.post = posts.posts.find(function(post){
		return post.id == $stateParams.id
	})


	$scope.addComment = function() {
		if($scope.body === '') { return; }
		$scope.post.comments.push({

		});
	}
}]);


/**
 * Find looks at each element in the array and tests it against the testFun
 * if it passes the test it returns the Element and stops looking for other Elements
 * if all the elements fail the test return undefined
 * @param data {Array}
 * @param testFunc {Function(Element, index, data):Boolean} 
 */
function find(data, testFunc) {
	var result = undefined;
	var stop = false;
	
	for(var i = 0; i < data.length && !stop; i++) {
		if( testFunc(data[i], i, data) ) {
			result = data[i]
			stop = true
		} 
	}

	return result;
} 







