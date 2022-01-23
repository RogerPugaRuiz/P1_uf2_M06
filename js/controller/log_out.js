/**
 * @description logout functions
 * @author Roger Puga Ruiz
 * @data 2022-01-22
 */

function logout() {

    $("#log_out").on("click", function () {
        $.removeCookie("idSession");
        window.location.href = "index.html";
    });
}