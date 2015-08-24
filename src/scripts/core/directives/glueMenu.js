'use strict';
/*@ngInject*/
module.exports = function() {
    return {
        restrict: 'E',
        replace: true,
        scope: {
            selectedElements: '='
        },
        templateUrl: 'core/partials/glueMenu.html',

        controller: function($scope) {
            $scope.model = {
                currentSelected: 0
            };

            window.addEventListener('scroll', function(value) {
                var scrollValue = value.currentTarget.scrollY;
                var glue = document.getElementById('glue-menu');

                // Fixe the menu to the top when your reach the top
                if(scrollValue > (window.innerHeight - 120)) {
                    glue.classList.add('fixed');
                } else {
                    glue.classList.remove('fixed');
                }

                // Switch selected element in menu
                var currentIndex = Math.round(scrollValue / window.innerHeight );
                $scope.model.currentSelected = currentIndex;

                // Use apply when you are in a callback
                $scope.$apply();

            });
        }
    };
};
