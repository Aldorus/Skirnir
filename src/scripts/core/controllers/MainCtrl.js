'use strict';
/*@ngInject*/
module.exports = function ($scope, github) {

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
            label: 'Contacts',
            link: 'contacts'
        }
    ];

    // Github controller
    $scope.githubProjects = github.data;
};
