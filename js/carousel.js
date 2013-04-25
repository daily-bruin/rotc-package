$(document).ready(function() {
    $('.carouselContainer').hide();
    $('#pageMask').hide();

    $('html').click(function() {
     	$('.carouselContainer').hide();
        $('#pageMask').fadeOut();
 	});

	$('.carouselLauncher, .carouselContainer').click(function(e) {
		e.stopPropagation();
	});

    $('.closeLabel').click(function() {
     	$('.carouselContainer').hide();
        $('#pageMask').fadeOut();
 	});


    $('#carouselLauncher-1').click(function() {
        $('#carouselContainer-1').show();
        $('#pageMask').fadeIn();
    });

    $('#carouselLauncher-2').click(function() {
        $('#carouselContainer-2').show();
        $('#pageMask').fadeIn();
    });

    $('#carouselLauncher-3').click(function() {
        $('#carouselContainer-3').show();
        $('#pageMask').fadeIn();
    });

    $('#carouselLauncher-4').click(function() {
        $('#carouselContainer-4').show();
        $('#pageMask').fadeIn();
    });

    $('#carouselLauncher-5').click(function() {
        $('#carouselContainer-5').show();
        $('#pageMask').fadeIn();
    });

    $('#carouselLauncher-6').click(function() {
        $('#carouselContainer-6').show();
        $('#pageMask').fadeIn();
    });

    $('#carouselLauncher-7').click(function() {
        $('#carouselContainer-7').show();
        $('#pageMask').fadeIn();
    });
});
