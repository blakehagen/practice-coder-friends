angular.module('coderFriends').controller('homeCtrl', function ($scope, githubService) {

    $scope.following = function () {
        githubService.getFollowing().then(function (response) {
            $scope.friends = response;
        })
    }
    $scope.following();

});