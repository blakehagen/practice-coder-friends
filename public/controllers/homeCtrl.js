angular.module('coderFriends').controller('homeCtrl', function ($scope, githubService) {

    $scope.following = function () {
        githubService.getFollowing().then(function (response) {
            $scope.friends = response;
        })
    }
    $scope.following();
    
    $scope.user = function(){
        githubService.getUser().then(function(response){
            $scope.authUser = response;
        })
    }
    
    $scope.user();

});