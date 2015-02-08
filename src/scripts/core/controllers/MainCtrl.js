'use strict';
/*@ngInject*/
module.exports = function ($scope, $location, $anchorScroll, GithubService) {

    //GithubService.call().then(function(response) {
    //    $scope.projects = response.data;
    //});

    var logo = $('#logo-scroll');
    var homeLink = $('#home-link');
    var aboutMeLink = $('#about-me-link');
    var CVLink = $('#cv-link');

    var home = $('#top');
    var aboutMe = $('#about-me');
    var cv = $('#cv');

    var valueLine = $(window).height();
    $(document).scroll(function () {

        logo.css({opacity: $(this).scrollTop() > 300 ? 1 : 0});

        if ($(this).scrollTop() < home.position().top + 200) {
            homeLink.addClass('selected');
            aboutMeLink.removeClass('selected');
            CVLink.removeClass('selected');

            $('.philo').css({opacity: 0 });

            $('.philo').css({transform: 'translateY(250px)' });

        } else if ($(this).scrollTop() > home.position().top && $(this).scrollTop() < aboutMe.position().top) {
            homeLink.removeClass('selected');
            aboutMeLink.addClass('selected');
            CVLink.removeClass('selected');

            $('.philo').css({opacity: 1 });

            $('.philo').css({transform: 'translateY(0)' });
        } else {
            homeLink.removeClass('selected');
            aboutMeLink.removeClass('selected');
            CVLink.addClass('selected');

        }


    });

    $(document).ready(function () {
        $('body').addClass('ready');
    });


};
