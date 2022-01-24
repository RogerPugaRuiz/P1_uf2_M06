/**
 * @description Config model view class
 * @date 2022-01-23
 */

class View_conf{
    // attributes
    #machines

    // constructors
    constructor(machines){
        this.#machines = machines;
    }

    // methods

    /**
     * @description method to create a html view
     * @param jq_obj object jQuery on append view
     */
    to_html(jq_obj){
        this.#machines.get_list().forEach( function (machine, index, array) {
            let tr = $("<tr></tr>");
            tr.append("<td>" + machine.get_id() + "</td>");
            tr.append("<td>" + machine.get_type() + "</td>");
            tr.append("<td>" + "Delete" + "</td>");
            $(jq_obj).append(tr);
        });
        
    }
}