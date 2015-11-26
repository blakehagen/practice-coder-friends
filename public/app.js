angular.module('coderFriends', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('login', {
            url: '/',
            urlTemplate: 'index.html'
        })

        .state('home', {
            url: '/home',
            urlTemplate: './templates/home.html'
        })

        .state('friend', {
            url: '/friend/:github_username',
            urlTemplate: './templates/friend.html'
        })

    $urlRouterProvider
        .otherwise('/');


});