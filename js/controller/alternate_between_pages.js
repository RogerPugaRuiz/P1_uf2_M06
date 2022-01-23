/**
 * @description alternate between pages
 * @author Roger Puga Ruiz
 * @date 2022-01-22
 */

/**
 * @description function toggled page
 */
function toggled_page() {
    go_home();
    go_config();
}

/**
 * @description function to go home page
 */
function go_home() {
    $("#go_home").on("click", function (event) {
        $(".home").show();
        $(".configuration").hide();
    });
}

/**
 * @description function to go config page
 */
function go_config() {
    $("#go_configuration").on("click",function(){
        $(".configuration").show();
        $(".home").hide();
    });
}