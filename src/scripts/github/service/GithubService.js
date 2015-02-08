'use strict';
/*@ngInject*/
module.exports = function ($http, github) {
    var service = {};
    service.call = function() {
        // https://api.github.com/users/Aldorus/repos
        return $http({
            url : 'https://api.github.com/users/Aldorus/repos?page=1&per_page=3'
        });
    };

    return service;

};