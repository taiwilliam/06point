
var swiper2 = new Swiper('.swiper-activity', {
    centeredSlides: true,
    effect: 'fade',
    autoplay: {
        delay: 1000,
        disableOnInteraction: false,
    },
    loop: 'true',
});


$(document).ready(function () {

    windowH = $(window).height();
    windowW = $(window).width();

    console.log(windowW/2);

    $('.swiper-activity').css({
        'height': windowH *0.8,
        'width': windowW * 0.7,
        'bottom': (windowH *0.2) /2
    });

    $('.menu-block').css({
        'bottom': (windowH - $('.menu-block-ul').height()) /2,
        'left': (windowW* 0.3 - $('.menu-block-ul').width()) /4
    });




});





