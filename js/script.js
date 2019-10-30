

// Hide Header on on scroll down


var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('header').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    // If they scrolled down and are past the navbar, add class .nav-up.
    // This is necessary so you never see what is "behind" the navbar.
    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('.header').removeClass('nav-down').addClass('nav-up').removeClass('fixed-header');
        $('.logo').removeClass('mg');
        $('.link').removeClass('fcolor');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('.header').removeClass('nav-up').addClass('nav-down').addClass("fixed-header");
            $('.logo').addClass('mg');
            $('.link').addClass("fcolor");
        }
    }

    lastScrollTop = st;
}



    
    setInterval(function () {
        if ($(window).scrollTop() < 80) {
            $('.header').removeClass('nav-up').removeClass('fixed-header');
            $('.logo').removeClass("mg");
            $('.link').removeClass('fcolor');
        }
    }, 250);
