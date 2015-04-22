'use strict';
require('../github/github');

angular.module('skirnir', [
    'ngAnimate',
    'ngTouch',
    'ngSanitize',
    'ui.router',
    'github',
    'smoothScroll',
    'ngMaterial',
    'pascalprecht.translate'])
    .controller('MainCtrl', require('./controllers/MainCtrl'))
    .config(function ($stateProvider, $urlRouterProvider, githubProvider, $translateProvider) {
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

        $translateProvider.useStaticFilesLoader({
            prefix: 'i18n/',
            suffix: '.json'
        });
        $translateProvider.preferredLanguage('en');
    })
;

