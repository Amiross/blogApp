(function () {
	'use strict';

	var app = angular.module('blogApp', ['ngRoute', 'ngSanitize']);

	app.config(function($routeProvider) {
		$routeProvider
			.when('/', {
				redirectTo: '/posts'
			})

			.when('/posts', {
				templateUrl: 'posts.html',
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