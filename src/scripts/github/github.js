'use strict';
/*@ngInject*/
angular.module('github', [])
    .provider('github', require('./provider/github'))
    .service('GithubService', require('./service/GithubService'));
