$(document).ready(function () {
    
    $('#add').on('click', addToList);

    $('#items').keypress(function (event) {
        if (event.keyCode == 13) {
            $("#add").click();
            return false;
        }
    });

    $('#clearAll').on('click', clearAllItems);

    $(".list-group").sortable({
        revert: true
    });
   
    $('body').on('click', '.list-group-item', function () {
        console.log("clicker is working");

        var $thisItem = $(this);

        $thisItem.toggleClass("list-group-item-danger");
        $thisItem.addClass("list-group-item-success");

        $thisItem.closest('li').toggleClass("success");
        progress();
    });
});


var progress = function () {

    var allItems = $('li').length;
    var successCount = $('li.success').length;

    var percentage = successCount / allItems * 100;
    console.log(percentage);

    $('.progress-bar').css('width', percentage + '%');
    
    if (allItems + successCount == 0) {
        $('.progress-bar').css('width', '0%');
    }

};

$(function () {
    $('#sortable').sortable();
    $('#sortable').disableSelection();
});

$(document).on('click', '.delete', function () {
    $(this).parent().remove();
});

var addToList = function () {
    var item = $('#items').val();
    $.trim(item)

    progress();

    if (item.length > 18 || !item.trim()) {
        $('.alert-warning').toggleClass('hidden');
        
        setTimeout(function () {    
            $('.alert-warning').toggleClass('hidden');
        }, 5000)
    }
    else {
        $('.list-group').append('<li class="list-group-item list-group-item-danger"><span class="glyphicon glyphicon-resize-vertical"></span>' + item + '<button type="button" class="btn btn-xs btn-danger"><span class="glyphicon glyphicon-ok"></span></button></li	>');			
        progress();
    }	
    };

var validateInput = function () {
    var items = $('#items').val();
   
};

var clearAllItems = function (){
    $('.list-group').empty();
    progress();
};
