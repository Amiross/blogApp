(function () {
    'use strict';

    var app = angular.module('blogApp');


    app.controller('PostsCtrl', ['postService','$scope', '$routeParams', function(postService, $scope) {
        postService.then(function(data){
            $scope.postsPage = 0;
            $scope.posts = data.data.posts;
        })
    }]);

}());
