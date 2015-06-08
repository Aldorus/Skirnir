'use strict';
module.exports = function () {
    return {
        restrict: 'E',
        replace: true,
        templateUrl: 'chart/partials/circularChart.html',
        scope: {
            data: '='
        },
        /*@ngInject*/
        controller: function ($scope) {
            var chartData = {
                'barCircle': $scope.data
            };
            var chartTrigger = document.getElementById('chart');
            $scope.middleHeight = chartTrigger.offsetHeight/2;
            $scope.middleWidth = chartTrigger.offsetWidth/2;


            function drawBarCircleChart(data, target) {
                var size = data[0].value * 1.15,
                    radius = chartTrigger.offsetHeight / 2.20,
                    sectorWidth = 0.1,
                    radScale = 25,
                    sectorScale = 1.20;
                target = d3.select(target);

                var arc = d3.svg.arc()
                    .innerRadius(function (d) {
                        return (d.index / sectorScale) * radius + radScale ;
                    })
                    .outerRadius(function (d) {
                        return ((d.index / sectorScale) + (sectorWidth / sectorScale)) * radius + radScale ;
                    })
                    .startAngle(Math.PI)
                    .endAngle(function (d) {
                        return (Math.PI + (d.value / size) * 2.0 * Math.PI);
                    });

                function arcTween(b) {
                    var i = d3.interpolate({value: 0}, b);
                    return function (t) {
                        return arc(i(t));
                    };
                }

                var path = target.selectAll('path')
                    .data(data);

                path.enter().append('svg:path')
                    .attr('fill', function (d) {
                        return d.fill;
                    })
                    .transition()
                    .ease('elastic')
                    .duration(1000)
                    .delay(function (d, i) {
                        return i * 100;
                    })
                    .attrTween('d', arcTween);
            }

            d3.select('#circleBar-web-icon')
                .transition()
                .delay(500)
                .duration(500)
                .attr('opacity', '1');
            d3.select('#circleBar-web-text')
                .transition()
                .delay(750)
                .duration(500)
                .attr('opacity', '1');

            d3.select('#circleBar-web-clipLabels')
                .transition()
                .delay(600)
                .duration(1250)
                .attr('height', '150');

            d3.select('#circleBar-mobile-icon')
                .transition()
                .delay(800)
                .duration(500)
                .attr('opacity', '1');
            d3.select('#circleBar-mobile-text')
                .transition()
                .delay(1050)
                .duration(500)
                .attr('opacity', '1');
            d3.select('#circleBar-mobile-clipLabels')
                .transition()
                .delay(900)
                .duration(1250)
                .attr('height', '150');

            // Launch animation
            window.addEventListener('scroll', function(value) {
                var scrollValue = value.currentTarget.scrollY;

                // Launch the show animation when the chart came to screen
                if(scrollValue >= chartTrigger.offsetTop - (window.innerHeight / 1.2)) {
                    drawBarCircleChart(chartData.barCircle, '#circleBar-web-chart', '#circleBar-web-values', '#circleBar-web-labels');
                }
            });

        }
    };
};
