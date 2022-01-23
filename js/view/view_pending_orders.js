
/**
 * @description pending order model view class
 * @author Roger Puga Ruiz
 * @date 2022-01-22
 */
class View_pending_orders{
    // attribute
    #pending_order // Class Order

    // constructors
    constructor(pending_order){
        this.#pending_order = pending_order;
    }

    // methods

    /**
     * @description method to create a html view
     */
    to_html(jq_obj){
        for (let index = 0; index < this.#pending_order.get_tail().length; index++) {
            const element = this.#pending_order.get_tail()[index];
            let html_order = $("<li class='command " + element.get_type() + "' id='" + element.get_id() + "'></li>");
            let div = $("<div class='inline'></div>");
            html_order.append("<h3>" + element.get_client_name() + "</h3>");
            div.append("<p>" + element.get_pece_name() + "</p>");
            div.append("<p>" + element.get_quantity() + "</p>");
            div.append("<p class='pos'>" + element.get_position() + "</p>");
            html_order.append(div);
            html_order.append("<div class='expand'><p>" + element.get_date_time() + "</p><input type='button' value='delete' id='delete'><input type='button' value='finalize' id='finalize'> </div>")

            $(jq_obj).append(html_order);     
        }
    }

    empty(jq_obj){
        $(jq_obj).empty();
    }

    to_string(){
        return this.#pending_order.to_string();
    }
}
