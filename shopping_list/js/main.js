$(document).ready(function () {
	$("#submit").on("click", function (event) {
			event.preventDefault();
			var fearitem = $("#input_field").val();
			var fearitemtrimmed = $.trim(fearitem);
			if (fearitemtrimmed.length > 18){
				$(".toomanychars").show();
				$(".toolittlechars").hide();
			}
			else if (fearitemtrimmed.length < 1) {
				$(".toolittlechars").show();
				$(".toomanychars").hide();
			}
			else {
				$("blockquote").hide();
				$.trim(fearitem);
				event.preventDefault();
				$("#input_field").val("");	
				$("#fears_list").append("<li id='fear_item'><a href='#'>"+ fearitem +"</a></li>");	
				$("#clear_all_btn").show();			
		    }
	});
	$("#fears_list").on("click","li", function (event) {
		event.preventDefault();
		$(this).toggleClass("erased");
		$(this).children().toggleClass("erased_text"); 
	});
	if ($("#fears_list li").not(".erased")){
		$("#fears_list li").on("mouseover", function () {
			$(this).toggleClass(".hovered");	
		})
	}
	$("#clear_all_btn").on("click", function(event) {
		event.preventDefault();
		$("#fears_list").empty();
		$(this).hide();
	});
});
