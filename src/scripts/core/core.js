'use strict';
require('../github/github');
require('../chart/chart');

angular.module('skirnir', [
    'ngAnimate',
    'ngTouch',
    'ngSanitize',
    'ui.router',
    'github',
    'chart',
    'smoothScroll'])
    .controller('MainCtrl', require('./controllers/MainCtrl'))
    .directive('glueMenu', require('./directives/glueMenu'))
    .directive('homeScreen', require('./directives/homeScreen'))
    .directive('projects', require('./directives/projects'))
    .directive('contacts', require('./directives/contacts'))
    .directive('skills', require('./directives/skills'))
    .config(function ($stateProvider, $urlRouterProvider, githubProvider) {
        /**
         * Angular application configuration
         */
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: 'core/partials/main.html',
                controller: 'MainCtrl',
                resolve: {
                    github: function(GithubService) {
                        return GithubService.call();
                    }
                }
            });

        $urlRouterProvider.otherwise('/');

        githubProvider.init({
            userName: 'Aldorus'
        });
    })
;

