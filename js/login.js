

$("#submit").on("click", function () {
    let name = $("#name").val();
    let password = $("#password").val();
    let data = {"name":name,"password":password}
    $.ajax({
        type: "post",
        url: "php/login.php",
        data: data,
        dataType: "json",
        success: function (response) {
            console.log("correct");
        }
    });
});
$("#reset").on("click",function(){
    $("#name").val("");
    $("#password").val("");
})
