
/**
 * @description Machines model view class
 * @date 2022-01-22
 */

class View_machines{
    
    // attribute
    #machines // Class Machines

    // constructor
    constructor(machines){
        this.#machines = machines;
    }

    // methods

    /**
     * @description method to create a html view
     */
    to_html(jq_obj){
        for (let index = 0; index < this.#machines.get_list().length; index++) {
            const machine = this.#machines.get_list()[index];

            // for all machines create a machine element
            let html_machines = $("<li class='machine " + machine.get_type() + "' id='"  + machine.get_id() + "'></li>");
            let box = $("<ul class='box connectedSortable' id='sortable3'></ul>");
            html_machines.append("<p>" + machine.get_type() + "</p>");
            html_machines.append(box);

            // add machine in class element
            $(jq_obj).append(html_machines);

            // for all orders in tail machine add order view
            let view_pending_orders = new View_pending_orders(machine);
            view_pending_orders.to_html($(html_machines).find(".box"));


            // show buttons delete and finalize
            $(".machine .delete").show();
            $(".machine").each( function (index, element){
                $(element).find(".finalize").first().show();
            });
        }
    }
    empty(jq_obj){
        $(jq_obj).empty();
    }

    to_string(){
        return this.#machines.to_string();
    }

}