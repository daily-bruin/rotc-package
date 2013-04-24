var hideNav = function() {
    /* hide elements by setting their opacity to 0 */
    $('.caption').css('opacity', 0);
    $('.tooltip').css('opacity', 0);
    $('.bullet-mask').css('opacity', 0);
}

var waypoints = function(wp) {
    if ($('#tooltip-'+String(wp)).css('opacity') < 1) { // check if the current tooltip is not visible
        $('.bullet-mask, .tooltip').css('opacity', 0); //hide all masks, tooltips
        $('#bullet-mask-'+String(wp)).animate({'opacity': 1}); //fade in this mask
        $('#tooltip-'+String(wp)).animate({'opacity': 1}); //fade in this tooltip
    }

    if ($('.caption#img-'+String(wp)).css('opacity') < 1) {
        /* executes the proper code depending on whether position is definied by 'top' or 'bottom' */
        /* NOTE: not working in Firefox, likely because Firefox
         * doesn't assign "position: 'auto'" to unassigned CSS attributes */
        if ($('.caption#img-'+String(wp)).css('bottom') === 'auto') {
            $('.caption#img-'+String(wp))
                .css({'top': '+=30px'})
                .animate({'opacity': 1, 'top': '-=30px'}, 1000);
        }
        else {
            $('.caption#img-'+String(wp))
                .css({'bottom': '-=30px'})
                .animate({'opacity': 1, 'bottom': '+=30px'}, 1000);
        }
    }
}

$(document).ready(function(){

    hideNav();

    /* detect which waypoint is reached and call the waypoints function on it */
    $('h2').waypoint(function(up){
        hideNav();
    })

    $('#feature-1').waypoint(function(down){
        waypoints(1);
    });

    $('#feature-2').waypoint(function(down){
        waypoints(2);
    });

    $('#feature-3').waypoint(function(down){
        waypoints(3);
    });

    $('#feature-4').waypoint(function(down){
        waypoints(4);
    });

    $('#feature-5').waypoint(function(down){
        waypoints(5);
    });

    $('#feature-6').waypoint(function(down){
        waypoints(6);
    });

});


/*
$('.caption#img1')
    .css('opacity', 0)
    .hide().slide(up)('slow')
    .animate({opacity:1},
    {queue: false, duration: 'slow'}
    );
*/