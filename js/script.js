$('.carousel').carousel({
    interval: 5000,
    pause: null
});
var stickyNavTop = $('.navbar').offset().top;
$(window).scroll(function() {
    if ($(window).scrollTop() > stickyNavTop) {
        $('.navbar').addClass('navbar-fixed-top');
        $('#img-slider').height('80vh');
    }
    if ($(window).scrollTop() < stickyNavTop) {
        $('.navbar').removeClass('navbar-fixed-top');
        $('#img-slider').height('75vh');
    }
});

if ($(window).width() < 767) {
    $(".dropdown-toggle").attr('data-toggle', 'dropdown');
    console.log("resized");
}
if ($(window).width() > 767) {
    $(".dropdown-toggle").attr('data-toggle', '');
}
$(window).resize(function() {
    if ($(window).width() < 767) {
        $(".dropdown-toggle").attr('data-toggle', 'dropdown');
        console.log("resized");
    }
    if ($(window).width() > 767) {
        $(".dropdown-toggle").attr('data-toggle', '');
    }
});
