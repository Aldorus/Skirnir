'use strict';
module.exports = function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'chart/partials/verticalBarChart.html',
        scope: {
            data: '='
        },
        /*@ngInject*/
        controller: function () {
            var chartTrigger = document.getElementById('chart');
            window.addEventListener('scroll', function(value) {
                var scrollValue = value.currentTarget.scrollY;

                // Launch the show animation when the chart came to screen
                if(scrollValue >= chartTrigger.parentNode.offsetTop + chartTrigger.offsetTop - (window.innerHeight / 1.8)) {
                     chartTrigger.classList.add('viewed');
                }
            });
        }
    };
};
