'use strict';
require('../github/github');

angular.module('skirnir', [
    'ngAnimate',
    'ngTouch',
    'ngSanitize',
    'ui.router',
    'github',
    'smoothScroll',
    'ngMaterial'])
    .controller('MainCtrl', require('./controllers/MainCtrl'))
    .config(function ($stateProvider, $urlRouterProvider, githubProvider) {
        /**
         * Angular application configuration
         */
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'core/partials/main.html',
                controller: 'MainCtrl'
            });

        $urlRouterProvider.otherwise('/');

        githubProvider.init({
            userName: 'Aldorus'
        });
    })
;

