
(function () {

    'use strict';
    var app = angular.module('blogApp');

    app.factory('postService', function($http) {
        return $http({method: 'GET', url: 'data/posts.json'})
    });
}());