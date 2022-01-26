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
        // add label table
        $(jq_obj).empty();
        $(jq_obj).append("<tr><th>ID</th><th>Type</th></tr>");
        
        this.#machines.get_list().forEach( function (machine, index, array) {
            
            let tr = $("<tr></tr>");
            let select = $("<select name=type ></select>");
            select.append("<option value='A'>A</option>");
            select.append("<option value='B'>B</option>");
            select.append("<option value='C'>C</option>");
            select.append("<option value='D'>D</option>");
            tr.append("<td class='id'>" + machine.get_id() + "</td>");
            let td = $("<td class='type'></td>");
            td.append(select);
            tr.append(td);
            tr.append("<input type='button' value='x' class='delete_machine'>");
            $(jq_obj).append(tr);

            $(tr).find("option").each(function(index,element){
                if ($(element).val() == machine.get_type()){
                    $(element).attr("selected","selected");
                }
            });

        });
        
    }
}