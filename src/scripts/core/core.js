'use strict';
require('../github/github');

angular.module('skirnir', ['ngAnimate', 'ngTouch', 'ngSanitize', 'ui.router', 'ui.bootstrap', 'ngBabelfish', 'github', 'angularSmoothscroll'])
    .controller('MainCtrl', require('./controllers/MainCtrl'))
    .config(function ($stateProvider, $urlRouterProvider, babelfishProvider, githubProvider) {
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

        /**
         * The provider the the translator module (we use here babelfish)
         */
        babelfishProvider.init({
            state: 'home',
            lang: 'en-EN',
            url: 'i18n/languages.json',
            namespace: 'i18n',
            lazy: false
        });

        githubProvider.init({
            userName: 'Aldorus'
        });
    })
;

