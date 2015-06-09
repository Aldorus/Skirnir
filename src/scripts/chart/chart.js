'use strict';

angular.module('chart', [])
    .directive('circularChart', require('./directives/circularChart'))
    .directive('verticalBarChart', require('./directives/verticalBarChart'))
    .directive('barChart', require('./directives/barChart'));
