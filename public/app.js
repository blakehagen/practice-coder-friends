angular.module('coderFriends', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('/', {
            url: '/',
            urlTemplate: './templates/login.html',
            controller: 'mainCtrl'
        })

        .state('home', {
            url: '/home',
            urlTemplate: './templates/home.html',
            controller: 'homeCtrl'
        })

        .state('friend', {
            url: '/friend/:github_username',
            urlTemplate: './templates/friend.html',
            controller: 'homeCtrl'
        })

    $urlRouterProvider
        .otherwise('/');


});