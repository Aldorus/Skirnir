'use strict';
/*@ngInject*/
module.exports = function () {

    var provider = {};

    provider.init = function(config) {
        provider.config = config;
    };

    provider.$get = function() {
        var service = {};

        service.getConfig = function() {
            return provider.config;
        };
        return service;
    };

    return provider;
};

