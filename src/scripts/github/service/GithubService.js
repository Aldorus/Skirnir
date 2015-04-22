'use strict';
/*@ngInject*/
module.exports = function ($http) {
    var service = {};
    service.call = function() {
        return $http({
            url : 'https://api.github.com/users/Aldorus/repos?page=1&per_page=3'
        });
    };

    return service;

};
