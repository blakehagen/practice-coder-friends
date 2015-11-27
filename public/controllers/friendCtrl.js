angular.module('coderFriends').controller('friendCtrl', function ($scope, $stateParams, githubService) {

    $scope.activity = function () {
        var username = $stateParams.github_username;
        githubService.getEvents(username).then(function (response) {
            console.log(response);
            $scope.activities = response;
        })
    }
    $scope.activity();



})