// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('storyUkr', ['ionic'])
.config(function($stateProvider, $urlRouterProvider) {
	// Use $urlRouterProvider to configure any redirects (when) and invalid urls (otherwise).
	$urlRouterProvider

	// The `when` method says if the url is ever the 1st param, then redirect to the 2nd param
	// Here we are just setting up some convenience urls.
	.when('/s?id', '/stories/:id')

	// If the url is ever invalid, e.g. '/asdf', then redirect to '/' aka the home state
	.otherwise('/stories');

	$stateProvider
	.state('stories', {
				url: "/stories",
				templateUrl: "templates/list.html",
				controller: 'StoryCtrl'
	})
	.state('stories.detail', {
			url: '/{storyId:[0-9]{1,4}}',
			views: {
			// So this one is targeting the unnamed view within the parent state's template.
				'': {
						templateUrl: 'templates/story.html'
				}
			}
	});
})

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }

    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.controller('StoryCtrl', function($scope) {
	$scope.stories = [
		{id: 1, title: 'Колобок', author: 'Народна', imageURL: 'http://wordpress.kolobok.se/wp-content/uploads/2014/07/kolobok-300x247.jpg'},
		{id: 2, title: 'Котигорошко', author: 'Народна', imageURL: 'http://wordpress.kolobok.se/wp-content/uploads/2014/07/kolobok-300x247.jpg'},
		{id: 3, title: 'Коза-дериза', author: 'Народна', imageURL: 'http://wordpress.kolobok.se/wp-content/uploads/2014/07/kolobok-300x247.jpg'},
		{id: 4, title: 'Кіт у чоботях', author: 'Народна', imageURL: 'http://wordpress.kolobok.se/wp-content/uploads/2014/07/kolobok-300x247.jpg'},
		{id: 5, title: 'Кіт у чоботях', author: 'Народна', imageURL: 'http://wordpress.kolobok.se/wp-content/uploads/2014/07/kolobok-300x247.jpg'}
	]
})