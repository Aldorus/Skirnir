'use strict';
/*@ngInject*/
module.exports = function ($scope) {

    $scope.selectedElements = [
        {
            label: 'Home',
            link: 'top'
        },
        {
            label: 'Projects',
            link: 'projects'
        },
        {
            label: 'Skills',
            link: 'skills'
        },
        {
            label: 'Contact',
            link: 'contact'
        }
    ];
};
