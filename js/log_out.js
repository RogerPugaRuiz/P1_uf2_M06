
$("#log_out").on("click",function(){
    $.removeCookie("idSession");
    window.location.href = "index.html";
});