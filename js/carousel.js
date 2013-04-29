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
    };

    function showMask () {
        $('#pageMask').fadeIn();
        $('body').addClass('stopScrolling');
    };

    $(function(){

        // Bind the event.
        $(window).hashchange( function(){
            // Alerts every time the hash changes!
            console.log( location.hash );
            switch (location.hash) {
                case "#carousel-1":
                    $('#carouselContainer-1').show();
                    showMask(); 
                    break;
                case "#carousel-2":
                    $('#carouselContainer-2').show();
                    showMask(); 
                    break;
                case "#carousel-3":
                    $('#carouselContainer-3').show();
                    showMask(); 
                    break;
                case "#carousel-4":
                    $('#carouselContainer-4').show();
                    showMask(); 
                    break;
                case "#carousel-5":
                    $('#carouselContainer-5').show();
                    showMask(); 
                    break;
                case "#carousel-6":
                    $('#carouselContainer-6').show();
                    showMask(); 
                    break;
                case "#carousel-7":
                    $('#carouselContainer-7').show();
                    showMask(); 
                    break;
                default:
                    break;                
            }
        });

        // Trigger the event (useful on page load).
        $(window).hashchange();

    });

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

});
