(function () {
	'use strict';

	var app = angular.module('blogApp', ['ngRoute', 'ngSanitize']);

	app.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				redirectTo: '/posts'
			})

			.when('/posts', {
				templateUrl: 'app/posts/templates/posts.html',
				controller: 'PostsCtrl'
			})
			/*
			 .when('/admin', {
			 templateUrl: 'app/admin/templates/admin.html',
			 controller: 'AdminCtrl'
			 })
			 */
			.otherwise({
				redirectTo: '/'
			});



	});

}());