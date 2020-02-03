var swiper = new Swiper('.top-swiper', {
    centeredSlides: true,
    // effect: 'fade',
    autoplay: {
        delay: 6000,
        disableOnInteraction: false,
    },
    loop: 'true',
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
            return '<span class="' + 'swiper-pagination-bullet' + '">' + '<div></div>' + '</span>';
        },
    },
});

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

//google map api
var map;
function initMap() {
    map = new google.maps.Map(document.getElementById('map'), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8
    });
}


$(document).ready(function () {
    $('.swiper-container').css('height', $(window).height());

    setTimeout(function () {
        $('.top-logo').addClass('show-o');
        setTimeout(function () {
            font_animate();
        }, 1500);
    });


    function font_animate() {
        $('.font-animate-down').each(function (k) {
            var $item = $(this);
            setTimeout(function () {
                $item.addClass('font-animate-down-show');
            }, k * 250);
        });
    };


    $('.page-top').click(function(event) {
        $('html,body').animate({
			scrollTop: 0
		}, 1000);
    });

    //bar-hover-slider 高度設定
    var wh = $(window).width();
    $('.bar-hover-slider-img').width(wh * 0.75)
    $('.bar-hover-slider-img').height(wh * 0.3)

    $('.bar-hover-slider-wrap').height(wh * 0.3)


    $('.bar-hover-slider-list:nth-of-type(1)').hover(function () {
        $('.bar-hover-slider-img').css('z-index', '0');
        $('.bar-hover-slider-img:nth-of-type(1)').css('z-index', '1')
    });
    $('.bar-hover-slider-list:nth-of-type(2)').hover(function () {
        $('.bar-hover-slider-img').css('z-index', '0');
        $('.bar-hover-slider-img:nth-of-type(2)').css('z-index', '1')
    });
    $('.bar-hover-slider-list:nth-of-type(3)').hover(function () {
        $('.bar-hover-slider-img').css('z-index', '0');
        $('.bar-hover-slider-img:nth-of-type(3)').css('z-index', '1')
    });
    $('.bar-hover-slider-list:nth-of-type(4)').hover(function () {
        $('.bar-hover-slider-img').css('z-index', '0');
        $('.bar-hover-slider-img:nth-of-type(4)').css('z-index', '1')
    });
    $('.bar-hover-slider-list:nth-of-type(5)').hover(function () {
        $('.bar-hover-slider-img').css('z-index', '0');
        $('.bar-hover-slider-img:nth-of-type(5)').css('z-index', '1')
    });


    //img-bar str

    $('.img-bar').each(function () {
        var contentHeight = $(this).find('.text-back').outerHeight();

        $(this).find('.img-box').css('top', - (400 - contentHeight) / 2);
        $(this).find('.color-back').css('top', - (200 - contentHeight) / 2);
    });

    //img-bar end





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

        //room
        $('.room-back').each(function () {
            var thisPos = $(this).offset().top;
            if ((windowHeight + scrollPos - windowHeight / 2) >= thisPos) {
                $(this).addClass('back-up');
            }
        });


        $('.img-bar').each(function () {
            var contentHeight = $(this).find('.text-back').outerHeight();

            var imgBoxHeight = - (400 - contentHeight) / 2;
            var colorBackHeight = (contentHeight) / 2;
            var textHeight = contentHeight - 450;

            $('.img-box').css('top', imgBoxHeight)
            $('.color-back').css('top', colorBackHeight - (scrollPos / 7) + 'px')
            $('.img-bar .col-7').css('top', textHeight + (scrollPos / 10) + 'px')
        });

        $('.back-slider').each(function () {

            var backSliderHeight = $(this).offset().top;

            $('.back-slider').css('background-position-x', (scrollPos + windowHeight - backSliderHeight) / 200 + '%');

        });





    });
    // 視差滾動end







});





