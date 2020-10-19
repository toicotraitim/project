$(document).ready(function(){
    $('.owl-carousel').owlCarousel({
        loop:true,
        margin:30,
        nav:false,
        dots:true,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:2,
                margin: 10
            },
            1024: {
                items:3
            }
        }
    });
    $(".scroll-top").click(function() {
        $("html").animate({
            scrollTop: 0
        });
    });
    $(".navbar-toggler").click(function() {
        $(".side-bar").toggleClass("active");
    });
    $(".side-bar-close").click(function() {
        $(".side-bar").toggleClass("active");
    });
});