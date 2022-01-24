
/**
 * @description functions related to the right click
 * @date 2022-01-22
 */

/**
 * @description event on right click
 */
function right_click() {
    $(document).on("contextmenu", ".command", function (e) {
        $(this).find(".expand").toggle();
        return false;
    });
}