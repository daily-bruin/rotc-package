$(document).ready(function() {

/*
    function getScrollBarWidth () {
        var inner = document.createElement('p');
        inner.style.height = "100%";
        inner.style.width = "200px";

        var outer = document.createElement('div');
        outer.style.position = "absolute";
        outer.style.top = "0px";
        outer.style.left = "0px";
        outer.style.visibility = "hidden";
        outer.style.height = "200px";
        outer.style.width = "150px";
        outer.style.overflow = "hidden";
        outer.appendChild (inner);

        document.body.appendChild (outer);
        var w1 = inner.offsetHeight;
        outer.style.overflow = 'scroll';
        var w2 = inner.offsetHeight;
        if (w1 == w2) w2 = outer.clientHeight;

        document.body.removeChild (outer);

        return (w1 - w2);
        };
*/

    function hideCarousel () {
     	$('.carouselContainer').hide();
        $('#pageMask').fadeOut();
        $('body').removeClass('stopScrolling');
        /* $('#pageContainer').css({'margin-left': '-=' + scrollbarWidth}); */
    }

    function showCarousel () {
        $('#carouselLauncher-1').show();
        $('#pageMask').fadeIn();
        $('body').addClass('stopScrolling');
    }

    /* scrollbarWidth = getScrollBarWidth().toString() + 'px'; */

    $('.carouselContainer').hide();
    $('#pageMask').hide();

    $('html').click(function() {
        hideCarousel();
 	});

    $('.closeLabel').click(function() {
        hideCarousel();
 	});

	$('.carouselLauncher, .carouselContainer').click(function(e) {
		e.stopPropagation();
	});


    $('#carouselLauncher-1').click(function() {
        $('#carouselContainer-1').show();
        $('#pageMask').fadeIn();
        $('body').addClass('stopScrolling');
    });

    $('#carouselLauncher-2').click(function() {
        $('#carouselContainer-2').show();
        $('#pageMask').fadeIn();
        $('body').addClass('stopScrolling');
    });

    $('#carouselLauncher-3').click(function() {
        $('#carouselContainer-3').show();
        $('#pageMask').fadeIn();
        $('body').addClass('stopScrolling');
    });

    $('#carouselLauncher-4').click(function() {
        $('#carouselContainer-4').show();
        $('#pageMask').fadeIn();
        $('body').addClass('stopScrolling');
    });

    $('#carouselLauncher-5').click(function() {
        $('#carouselContainer-5').show();
        $('#pageMask').fadeIn();
        $('body').addClass('stopScrolling');
    });

    $('#carouselLauncher-6').click(function() {
        $('#carouselContainer-6').show();
        $('#pageMask').fadeIn();
        $('body').addClass('stopScrolling');
    });

    $('#carouselLauncher-7').click(function() {
        $('#carouselContainer-7').show();
        $('#pageMask').fadeIn();
        $('body').addClass('stopScrolling');
    });
});
