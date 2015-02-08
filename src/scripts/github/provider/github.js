'use strict';
/*@ngInject*/
module.exports = function () {

    var provider = {};

    provider.init = function(config) {
        provider.config = config;
    };

    provider.$get = function() {
    };

    return provider;
};

