
var swiper2 = new Swiper('.swiper-room', {
    slidesPerView: 6,
    freeMode: true,
    spaceBetween: 1,
    loop: true,
    speed: 12000,
    autoplay: {
        delay: 0,
        // disableOnInteraction: false,
    },
});


$(document).ready(function () {

    $('.page-top').click(function(event) {
        $('html,body').animate({
			scrollTop: 0
		}, 1000);
    });


    // 視差滾動str
    $('.scrollTop').click(function (e) {
        e.preventDefault();

        var target = $(this).attr('href');
        var targetPos = $(target).offset().top;
        var headerHeight = $('.header').height()

        $('html, body').animate({ scrollTop: targetPos - headerHeight }, 1000);
    });

    $(window).scroll(function () {
        var scrollPos = $(window).scrollTop();
        var windowHeight = $(window).height();
        var topSwiperHeight = $('.top-swiper').height();

        //header
        if (scrollPos > topSwiperHeight) {
            $('.header').addClass('header-open');
        } else {
            $('.header').removeClass('header-open');
        }


        // animated
        $('.animated-r ,.animated-l ,.animated-c').each(function () {
            var thisPos = $(this).offset().top;
            if ((windowHeight + scrollPos - windowHeight / 2) >= thisPos) {
                $(this).addClass('fadeIn');
            }
        });

    });
    // 視差滾動end







});





