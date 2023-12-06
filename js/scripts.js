jQuery(function ($) {

    'use strict';

    // --------------------------------------------------------------------
    // PreLoader
    // --------------------------------------------------------------------

    (function () {
        $('#preloader').delay(200).fadeOut('slow');
    }());

    // --------------------------------------------------------------------
    // One Page Navigation
    // --------------------------------------------------------------------

    (function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() >= 50) {
                $('nav.navbar').addClass('sticky-nav');
            }
            else {
                $('nav.navbar').removeClass('sticky-nav');
            }
        });
    }());

    // --------------------------------------------------------------------
    // jQuery for page scrolling feature - requires jQuery Easing plugin
    // --------------------------------------------------------------------

    $(function () {
        $('a.page-scroll').on('click', function (e) {
            e.preventDefault();
            var $anchor = $(this);
            var targetPage = $anchor.attr('href');

            // Fade out the body
            $('body').fadeOut(500, function () {
                // Perform a page redirect after fade out
                window.location.href = targetPage;
            });
        });
    });
    

    // --------------------------------------------------------------------
    // Closes the Responsive Menu on Menu Item Click
    // --------------------------------------------------------------------

    (function () {
        $('.navbar-collapse ul li a').on('click', function () {
            if ($(this).attr('class') != 'dropdown-toggle active' && $(this).attr('class') != 'dropdown-toggle') {
                $('.navbar-toggle:visible').trigger('click');
            }
        });
    }());

    // --------------------------------------------------------------------
    // Google Map
    // --------------------------------------------------------------------

    (function () {
        if ($('#googleMap').length > 0) {

          //set your google maps parameters
          var $latitude  = 31.0527, //If you unable to find latitude and longitude of your address. Please visit http://www.latlong.net/convert-address-to-lat-long.html you can easily generate.
              $longitude = 17.8304,
              $map_zoom  = 18;
          /* ZOOM SETTING */

            //google map custom marker icon
            var $marker_url = 'img/google-map-marker.png';

            //we define here the style of the map
            var style = [{
                "stylers" : [{
                    "hue" : "#000"
                }, {
                    "saturation" : 100
                }, {
                    "gamma" : 1.15
                }, {
                    "lightness" : 5
                }]
            }];

            //set google map options
            var map_options = {
                center            : new google.maps.LatLng($latitude, $longitude),
                zoom              : $map_zoom,
                panControl        : false,
                zoomControl       : false,
                mapTypeControl    : false,
                streetViewControl : false,
                mapTypeId         : google.maps.MapTypeId.ROADMAP,
                scrollwheel       : false,
                styles            : style,
            }
            //initialize the map
            var map = new google.maps.Map(document.getElementById('googleMap'), map_options);
            //add a custom marker to the map
            var marker = new google.maps.Marker({
                position : new google.maps.LatLng($latitude, $longitude),
                map      : map,
                visible  : true,
                icon     : $marker_url
            });
        }
    }());

}); // JQuery end
function smoothScroll(target, duration) {
    var target = document.querySelector(target);
    var targetPosition = target.getBoundingClientRect().top;
    var startPosition = window.pageYOffset;
    var distance = targetPosition - startPosition;
    var startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        var timeElapsed = currentTime - startTime;
        var run = easing(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easing(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 *t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

var home = document.querySelector('#section-intro');
var about = document.querySelector('#about');
var services = document.querySelector('#services');
var contact = document.querySelector('#contact');

var homeLink = document.querySelector('nav a[href="#section-intro"]');
var aboutLink = document.querySelector('nav a[href="#about"]');
var servicesLink = document.querySelector('nav a[href="#services"]');
var contactLink = document.querySelector('nav a[href="#contact"]');

homeLink.addEventListener('click', function() {
    smoothScroll('#section-intro', 900);
});

aboutLink.addEventListener('click', function() {
    smoothScroll('#about', 1000);
});

servicesLink.addEventListener('click', function() {
    smoothScroll('#services', 1000);
});

contactLink.addEventListener('click', function() {
    smoothScroll('#contact', 1000);
});