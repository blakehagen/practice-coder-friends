angular.module('coderFriends', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('login', {
            url: '/',
            templateUrl: './templates/login.html',
            controller: 'mainCtrl'
        })

        .state('home', {
            url: '/home',
            templateUrl: './templates/home.html',
            controller: 'homeCtrl'
        })

        .state('friend', {
            url: '/friend/:github_username',
            templateUrl: './templates/friend.html',
            controller: 'homeCtrl'
        })

    $urlRouterProvider
        .otherwise('/');


});