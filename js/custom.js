$(document).ready(function() {
    'use strick';

    // banner slider;
    $('.banner-slider').slick({
        arrows: true,
        prevArrow: '<i class = "fas fa-arrow-left prevArrow" > </i>',
        nextArrow: '<i class = "fas fa-arrow-right nextArrow" > </i>',
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 1500,
        autoplay: true,
        dots: true,
        cssEase: 'linear',
        fade: true,
        responsive: [{
            breakpoint: 576,
            settings: {
                arrows: false,
            }
        }, ]
    });

    // navbar scrolling;
    var Nav = $("nav");
    $(window).scroll(function() {
        var scrolling = $(this).scrollTop();
        if (scrolling > 350) {
            Nav.addClass("nav-fix");
        } else {
            Nav.removeClass("nav-fix");
        }

        if (scrolling > 500) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

    // back-to-top ;
    $('.back-to-top').click(function() {
        $('html,body').animate({
            scrollTop: 0,
        }, 1500);
    });

    // portfolio veno box;
    $('.venobox').venobox({
        spinner: 'wandering-cubes',
    });

    // service itim slider;
    $('.service-item').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        speed: 1000,
        prevArrow: '<i class = "fas fa-arrow-up prevArrow" > </i>',
        nextArrow: '<i class = "fas fa-arrow-down nextArrow" > </i>',
    });

    //testimonial member slider; 
    $('.testimonial-member').slick({
        arrows: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        vertical: true,
        verticalSwiping: true,
        autoplay: false,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,
        speed: 1000,
        prevArrow: '<i class = "fas fa-arrow-up prevArrow" > </i>',
        nextArrow: '<i class = "fas fa-arrow-down nextArrow" > </i>',
        asNavFor: '.testimonial-text',
    });

    //  //testimonial text slider; 
    $('.testimonial-text').slick({
        arrows: false,
        slidesToShow: 1,
        slidesToScroll: 1,
        fade: true,
        asNavFor: '.testimonial-member',
    });

    // fun-fact count up;
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    // logo slider;
    $('.rotate-degree').slick({
        arrows: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        focusOnSelect: true,

        responsive: [{
                breakpoint: 1200,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            },
        ]
    });
});