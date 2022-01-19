
/**
 * Home link page
 */
$("#go_home").on("click",function(event){
    $(".home").show();
    $(".configuration").hide();
});

/**
 * expand command on rigth click
 */
 $(document).on("contextmenu", ".command", function(e){
    $(this).find(".expand").toggle();
    console.log($(this).find(".expand"));
    return false;
 });
