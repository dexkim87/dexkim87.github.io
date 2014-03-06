$(document).ready(function() {
		$("#submit").click(function(event){
	    event.preventDefault();
	    var input = $("#input_field").val();
        var inputlength = $("#input_field").val().length;
	    if (inputlength>0) {
		$("#fears_list").append("<a href='#' class='fear_list_icon'></a><div class='fear_list_item'>"+input+"</div>");
		 $("a.fear_list_icon").click(function(){
	    $(this).toggleClass("checked_box");
	    $(this).parent().toggleClass("checked_text");
	    console.log("hi");
    })

		}
		else {
			alert("Do you fear nothing? Type something before submitting!")
		}
   	})
});
