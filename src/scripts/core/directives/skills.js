'use strict';
module.exports = function() {
    return {
        restrict: 'E',
        replace: true,
        scope: true,
        templateUrl: 'core/partials/skills.html',
        link: function (scope) {

            scope.valueSkills = [
                {'index': 0.3, 'value': 95, 'fill': '#5F8500', 'label': 'CSS (CSS3)'},
                {'index': 0.4, 'value': 90, 'fill': '#678E07', 'label': 'AngularJS'},
                {'index': 0.5, 'value': 85, 'fill': '#83AE1A', 'label': 'Android'},
                {'index': 0.6, 'value': 80, 'fill': '#A0CA39', 'label': 'API'},
                {'index': 0.7, 'value': 80, 'fill': '#C8F25F', 'label': 'PHP'},
                {'index': 0.8, 'value': 80, 'fill': '#B5E936', 'label': 'Gulp'},
                {'index': 0.9, 'value': 75, 'fill': '#C1E562', 'label': 'Industrialisation'},
                {'index': 1.0, 'value': 70, 'fill': '#9CD60A', 'label': 'MySQL'}

            ];
        }
    };
};
