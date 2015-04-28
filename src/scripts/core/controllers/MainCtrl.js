'use strict';
/*@ngInject*/
module.exports = function () {

    var width, height;

    var aboutMe = $('.about-me');
    var projects = $('.projects');
    var contacts = $('.contacts');

    var page = $('body');
    
    $(document).mousewheel(function(event, delta){
        if (delta < 0) {
            page.scrollTop(page.scrollTop() + 65);
        } else if (delta > 0) {
            page.scrollTop(page.scrollTop() - 65);
        }
        return false;
    });

    $(document).scroll(function () {
        var scroll = $(this).scrollTop();

        if(scroll < height + 250) {

            //Phase 1

            var pV = height - scroll;
            if(pV < 0) {
                pV = 0;
            }
            projects.css({
                webkitTransform:'translate3d(0, '+pV+'px, 0)'
            });
            aboutMe.css({
                webkitTransform:'translate3d(0, -'+scroll/2+'px, 0)'
            });

        }
        if(scroll > height + 100) {

            //Phase 2
            var baseScroll = scroll - (height + 100);
            console.log("base scroll", baseScroll);

            //Calc percentage
            var percentage = baseScroll / height;
            console.log(percentage);

            var pV = width - (width*percentage);
            if(pV < 0) {
                pV = 0;
            }
            contacts.css({
                webkitTransform:'translate3d('+pV+'px, 0, 0)'
            });
        } else {
            contacts.css({
                webkitTransform:'translate3d('+width+'px, 0, 0)'
            });
        }

        if(scroll < height*3) {

            //Phase 3
            console.log('Slide start3');


        }

        if(scroll < height*4) {

            //Phase 4
            console.log('Slide start4');


        }
    });

    $(document).ready(function () {

        $('body').addClass('ready');
        // With this lines you correct the android keyboard comportment for the formEnd
        height = window.innerHeight;
        width = window.innerWidth;
        document.getElementsByTagName('body')[0].style.height = height + 'px';
        document.getElementsByTagName('html')[0].style.height = height + 'px';

        // init transformation
        projects.css({
            webkitTransform:'translate3d(0, '+height+'px, 0)'
        });
        contacts.css({
            webkitTransform:'translate3d('+width+'px, 0, 0)'
        });
    });

    $(window).on('beforeunload', function(){
        $(window).scrollTop(0);
    });


};
