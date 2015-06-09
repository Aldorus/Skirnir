'use strict';
module.exports = function() {
    return {
        restrict: 'E',
        replace: true,
        scope: true,
        templateUrl: 'core/partials/skills.html',
        link: function (scope) {

            scope.valueSkills = [

                // Front
                {value: 95, fill: '#0090FF', text:'#FFFFFF', label: 'CSS (CSS3)', hideValue: true},
                {value: 95, fill: '#0090FF', text:'#FFFFFF', label: 'Web semantic', hideValue: true},
                {value: 75, fill: '#0090FF', text:'#FFFFFF', label: 'Unit testing', hideValue: true},
                {value: 85, fill: '#0090FF', text:'#FFFFFF', label: 'AngularJS', hideValue: true},
                {value: 90, fill: '#0090FF', text:'#FFFFFF', label: 'Javascript', hideValue: true},

                // Mobile
                {value: 90, fill: '#0CE87D', text:'#FFFFFF', label: 'Android', hideValue: true},
                {value: 80, fill: '#0CE87D', text:'#FFFFFF', label: 'API', hideValue: true},
                {value: 85, fill: '#0CE87D', text:'#FFFFFF', label: 'Responsive', hideValue: true},

                // Server
                {value: 90, fill: '#E8B800', text:'#FFFFFF', label: 'PHP', hideValue: true},
                {value: 85, fill: '#E8B800', text:'#FFFFFF', label: 'JAVA/J2EE', hideValue: true},

                // Lead developing
                {value: 85, fill: '#FF6D0D', text:'#FFFFFF', label: 'Git', hideValue: true},
                {value: 95, fill: '#FF6D0D', text:'#FFFFFF', label: 'Gulp', hideValue: true},
                {value: 65, fill: '#FF6D0D', text:'#FFFFFF', label: 'C. Integration', hideValue: true},
                {value: 55, fill: '#FF6D0D', text:'#FFFFFF', label: 'Management', hideValue: true}

            ];
        }
    };
};
