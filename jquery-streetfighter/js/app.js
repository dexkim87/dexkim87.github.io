$(document).ready(function () {
    $("#ryu").mouseenter(function () {
        $("#ryu_standing").hide();
        $("#ryu_ready").show();

    })
        .mouseleave(function () {
        $("#ryu_ready").hide();
        $("#ryu_standing").show();
    })        
    	.mousedown(function () {
    	playHadouken();  
    	$("#ryu_standing").hide();
        $("#ryu_ready").hide();
        $("#ryu_cool").hide();
        $("#ryu_hadouken").show();
        $("#hadouken").finish().show().animate({
            'left': '900px'
        }, 500, function () {
            $(this).hide();
            $(this).css({'left': '340px'});
        });
    })
        .mouseup(function () {
        $("#ryu_hadouken").hide();
        $("#ryu_standing").hide();
        $("#ryu_cool").hide();
        $("#ryu_ready").show();
    })
});
$(document).ready(function () {
        $(document).keydown(function(e) {
		var code = e.which;
		if (code==88) {
			$("#ryu_ready").hide();
			$("#ryu_standing").hide();
			$("#ryu_hadouken").hide();
			$("#ryu_cool").show();
		};
	})
		.keyup(function(e) {
		var code= e.which
		if(code==88) {
			$("#ryu_cool").hide();
			$("#ryu_standing").show();
		};
	})	
});
	    function playHadouken () {
		  $('#hadouken-sound')[0].volume = 0.5;
		  $('#hadouken-sound')[0].load();
		  $('#hadouken-sound')[0].play();
    }
