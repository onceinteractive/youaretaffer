// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('onceinteractive', ['ionic', 'onceinteractive.controllers', 'onceinteractive.services'])
    .run(function ($ionicPlatform) {
        $ionicPlatform.ready(function () {
            if (window.StatusBar) {
                // org.apache.cordova.statusbar required
                StatusBar.styleDefault();
            }
        });
    })
    .config(function($stateProvider, $urlRouterProvider) {
        $stateProvider
            .state('auth', {
                url: "/auth",
                cache: false,
                abstract: true,
                templateUrl: "templates/auth.html"
            })
            .state('auth.signin', {
                url: '/signin',
                cache: false,
                views: {
                    'auth-signin': {
                        templateUrl: 'templates/auth-signin.html',
                        controller: 'SignInCtrl'
                    }
                }
            })
            .state('auth.signup', {
                url: '/signup',
                cache: false,
                views: {
                    'auth-signup': {
                        templateUrl: 'templates/auth-signup.html',
                        controller: 'SignUpCtrl'
                    }
                }
            })
            .state('bucket', {
                url: "/bucket",
                abstract: true,
                cache: false,
                templateUrl: "templates/bucket.html"
            })
            .state('bucket.list', {
                url: '/list',
                cache: false,
                views: {
                    'bucket-list': {
                        templateUrl: 'templates/bucket-list.html',
                        controller: 'myListCtrl'
                    }
                }
            })
            .state('bucket.completed', {
                url: '/completed',
                views: {
                    'bucket-completed': {
                        templateUrl: 'templates/bucket-completed.html',
                        controller: 'completedCtrl'
                    }
                }
            })
        $urlRouterProvider.otherwise('/auth/signin');
    });
