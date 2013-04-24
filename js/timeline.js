var generateTimeline = function(media_root, content, photo_width) {
    scroller_pos = 0;
    content_width = (content.length - 1) * photo_width
    document.write(
        '<div id="scroller">'+
            '<div id="next">Next&raquo;</div>'+
            '<div id="passepartout"></div>'+
            '<!--<div id="timelineHeadDecoration"></div>-->'
    );
    for (i=0; i < content.length; i++) {
        document.write(
            '<div class="timelinePhoto">'+
                '<div class="timelineHead" id="timelineHead-'+(i+1)+'">'+
                    '<span class="time">'+content[i][1]+'</span>'+
                    '<span class="activity">'+content[i][2]+'</span>'+
                '</div>'+
                '<img src="'+media_root+content[i][0]+'"/>'+
            '</div>'
        )
    };
    document.write('</div>');

    $('#next').click(function() {
        if (scroller_pos < content.length - 2) {
            $('.timelinePhoto').animate({left: '-='+photo_width}, 1000);
            scroller_pos++;
        }
        else if (scroller_pos === content.length - 2) {
            $('#next').html("&laquo;Back");
            $('.timelinePhoto').animate({left: '-='+photo_width}, 1000);
            scroller_pos++;
        }
        else {
            $('#next').html("Next&raquo;");
            $('.timelinePhoto').animate({left: '+='+content_width}, 1000);
            scroller_pos = 0;
        }
    });
}
