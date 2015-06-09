'use strict';
module.exports = function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'chart/partials/barChart.html',
        scope: {
            data: '='
        },
        /*@ngInject*/
        controller: function () {

        }
    };
};
