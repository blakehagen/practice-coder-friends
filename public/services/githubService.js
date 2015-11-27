angular.module('coderFriends').service('githubService', function ($http, $q) {

    this.getFollowing = function () {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://localhost:4000/api/github/following'
        }).then(function (response) {
            // console.log(response);
            deferred.resolve(response.data)
        })
        return deferred.promise
    }

    this.getEvents = function (username) {
        var deferred = $q.defer();
        $http({
            method: 'GET',
            url: 'http://localhost:4000/api/github/' + username + '/activity'
        }).then(function (response) {
            // console.log(response);
            deferred.resolve(response.data)
        })
        return deferred.promise
    }






});