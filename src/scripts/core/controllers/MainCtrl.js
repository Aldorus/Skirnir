'use strict';
/*@ngInject*/
module.exports = function ($scope) {

    $scope.selectedElements = [
        {
            label: 'Home',
            link: 'top'
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
