/**
 * @description login functions
 * @author Roger Puga Ruiz
 * @data 2022-01-22
 */

function login() {
    if ($.cookie('idSession') === undefined) {

    } else {
        $(".login, .smoke-screen").hide();
        $(".welcome").text("Bienvenido " + $.cookie("idSession"));
    }

    // submit login form
    //$.cookie("session");
    $("#submit").on("click", function () {
        let name = $("#name").val();
        let password = $("#password").val();
        let user = { "name": name, "password": password }

        // send user
        $.ajax({
            data: JSON.stringify(user),
            type: "POST",
            dataType: "json",
            url: "php/login.php",
        })
            .done(function (data, textStatus, jqXHR) {

                // if session is correct
                if (data["idSession"]) {
                    $(".login, .smoke-screen").fadeOut();
                    $.cookie("idSession", user["name"], { expires: 30 });
                    $(".welcome").text("Bienvenido " + $.cookie("idSession"));
                } else {
                    $(".login-message").slideDown(500);
                }
            })
            .fail(function (jqXHR, textStatus, errorThrown) {
                if (console && console.log) {
                    console.log("La solicitud a fallado: " + textStatus);
                }
            }); 2
    });

    // reset the form
    $("#reset").on("click", function () {
        $("#name").val("");
        $("#password").val("");
    })
}
