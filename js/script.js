$('.carousel').carousel({
    interval: 7000,
    pause: null
});
var stickyNavTop = $('.navbar').offset().top;
$(window).scroll(function() {
    if ($(window).scrollTop() > stickyNavTop) {
        $('.navbar').addClass('navbar-fixed-top');
        if ($(window).width() >= 768) {
            $('#img-slider').height('80vh');
        }
    }
    if ($(window).scrollTop() < stickyNavTop) {
        $('.navbar').removeClass('navbar-fixed-top');
        if ($(window).width() >= 768) {
            $('#img-slider').height('75vh');
        }
    }
});

if ($(window).width() < 768) {
    $(".dropdown-toggle").attr('data-toggle', 'dropdown');
    console.log("resized");
}
if ($(window).width() >= 768) {
    $(".dropdown-toggle").attr('data-toggle', '');
}
$(window).resize(function() {
    if ($(window).width() < 768) {
        $(".dropdown-toggle").attr('data-toggle', 'dropdown');
        console.log("resized");
    }
    if ($(window).width() >= 768) {
        $(".dropdown-toggle").attr('data-toggle', '');
    }
});
