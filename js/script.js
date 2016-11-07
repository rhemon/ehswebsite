$('.carousel').carousel({
    interval: 5000,
    pause: null
});
var stickyNavTop = $('.navbar').offset().top;
$(window).scroll(function() {
    if ($(window).scrollTop() > stickyNavTop) {
        $('.navbar').addClass('navbar-fixed-top');
    }
    if ($(window).scrollTop() < stickyNavTop) {
        $('.navbar').removeClass('navbar-fixed-top');
    }
});
