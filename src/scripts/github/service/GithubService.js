'use strict';
/*@ngInject*/
module.exports = function ($http, github) {
    var service = {};

    service.call = function() {
        return $http({
            url : 'https://api.github.com/users/' + github.getConfig().userName+ '/repos?page=1&per_page=15'
        });
    };

    return service;

};
