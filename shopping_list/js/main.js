$(document).ready(function() {
	$("#submit").click(function(event){
	    event.preventDefault();
	    var input = $("#input_field").val();
        var inputlength = $("#input_field").val().length;
	    if (inputlength>0) {
		$("#fears_list").append("<a class='fear_list_icon'></a><div class='fear_list_item'>"+input+"</div>");
		}
		else {
			alert("Do you fear nothing? Type something before submitting!")
		}
   	})
	    $("a.fear_list_icon").click(function(){
	    $(this).toggleClass("checked_box");
	    $(this).parent().toggleClass("checked_text");
	    console.log("hi");
    });
});
