'use strict';
/*@ngInject*/
module.exports = function () {

    var logo = $('#logo-scroll');
    var homeLink = $('#home-link');
    var aboutMeLink = $('#about-me-link');
    var CVLink = $('#cv-link');

    var home = $('#top');
    var aboutMe = $('#about-me');
    var cv = $('#cv');
    var menu = $('#menu');
    var background = $('#background');

    $(document).scroll(function () {

        // Menu fixing
        var fixed = false;
        if(!fixed && $(this).scrollTop() > menu.position().top) {
            fixed = true;
            menu.css({
                position: 'fixed',
                top: '0',
                bottom: 'initial'

            });
            menu.addClass('fixed');
        }
        if(fixed && $(this).scrollTop() < (window.innerHeight - menu.height())) {
            fixed = false;
            menu.css({
                position: 'absolute',
                bottom: '0',
                top: 'initial'
            });
            menu.removeClass('fixed');
        }

        // Background header parallax
        if(!fixed) {
            var opacity = $(this).scrollTop() / background.height() + 0.4;
            menu.css({
                'backgroundColor': 'rgba(0,0,0,'+ opacity +')'
            });
        }

        logo.css({opacity: $(this).scrollTop() > 300 ? 1 : 0});

        if ($(this).scrollTop() < home.height()) {
            homeLink.addClass('selected');
            aboutMeLink.removeClass('selected');
            CVLink.removeClass('selected');

            $('.philo').css({opacity: 0 });

            $('.philo').css({transform: 'translateY(250px)' });
        } else if ($(this).scrollTop() >= home.height() && $(this).scrollTop() < aboutMe.position().top + aboutMe.height()) {
            homeLink.removeClass('selected');
            aboutMeLink.addClass('selected');
            CVLink.removeClass('selected');

            $('.philo').css({opacity: 1 });

            $('.philo').css({transform: 'translateY(0)' });
        } else if ($(this).scrollTop() > aboutMe.position().top + aboutMe.height()) {
            homeLink.removeClass('selected');
            aboutMeLink.removeClass('selected');
            CVLink.addClass('selected');
        }
    });

    $(document).ready(function () {
        $('body').addClass('ready');
    });


};
