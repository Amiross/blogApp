(function () {
    'use strict';

    var app = angular.module('blogApp');


    app.controller('FullPostCtrl', ['postService','$scope', '$routeParams', function(postService, $scope, $routeParams) {
        console.log($routeParams);
        postService.then(function(data){
            $scope.posts = data.data.posts;
            for (var i = 0; i < data.data.posts.length; i++) {
                if(data.data.posts[i].urlPath == $routeParams.id) {
                    $scope.post = data.data.posts[i];
                }
            };

        });

    }]);



}());