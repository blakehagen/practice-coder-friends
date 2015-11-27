angular.module('coderFriends').controller('homeCtrl', function($scope, githubService){

    $scope.following = function(){
        githubService.getFollowing().then(function(response){
            $scope.friends = response;
            console.log(response);
        })
    }
    $scope.following();
    
    
    $scope.activity = function(username){
        githubService.getFriendActivity(username).then(function(response){
            console.log(response);
            $scope.events = response;
        })
    }
    
    
    
    
});