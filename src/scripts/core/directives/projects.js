'use strict';
module.exports = function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            projects: '='
        },
        templateUrl: 'core/partials/projects.html',
        link: function () {

        }
    };
};
