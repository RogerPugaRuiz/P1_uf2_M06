/**
 * @description Class to control the machine atributes
 * @date 2022-01-25
 */



class Machine_controller {


/**
 * @description method to delete machine if it has no queue
 * @param obj html element
 */
delete_machine(jq_obj) {
    $(jq_obj).on("click", function (e) {
        // let id = $(this).parent().find("td:nth-child(1)").text();
        // let type = $(this).parent().find("td:nth-child(2)").text()
        // let machine = load_data.get_machines().find_by_id(id);
        // console.log(machine);
        // if (machine != undefined) {
        //     if (machine.get_tail().length == 0) {
        //         $(this).parent().hide();
        //         $(this).parent().addClass("remove");

        //     } else {
        //         alert("it is not possible to delete a machine that has a queue");
        //     }
        // } else {
        //     $(this).parent().remove();
        // }
        //}
    });
    
}

/**
 * @description method to add new machine in array machines
 * @param obj html element
 */
add_machine(jq_obj) {
    $(jq_obj).on("click", function (e) {
        // let tr = $("<tr></tr>");
        // let id = $("table tr").length;
        // let select = $("<select name=type ></select>");
        // select.append("<option value=''>undefined</option>")
        // select.append("<option value='A'>A</option>");
        // select.append("<option value='B'>B</option>");
        // select.append("<option value='C'>C</option>");
        // select.append("<option value='D'>D</option>");
        // tr.append("<td>" + id + "</td>");
        // let td = $("<td></td>");
        // td.append(select);
        // tr.append(td);
        // tr.append("<input type='button' value='x' class='delete_machine'>");
        // $("table").append(tr);
    });
}

/**
 * @description method to submit the actually machine state
 * @param obj html element
 */
submit_machine(jq_obj) {
    // console.log($("#submit"));
    $(jq_obj).on("click", function (e) {
        load_data.get_machines().get_list().forEach(function (machine, index, array) {
            machine.set_type($($("table .type")[index]).find("option:selected").text());
        });
        reload();
    });
}

reset_id() {
    $("tr").each(function (index, element) {
        $(element).find("td:nth-child(1)").text(index);
        // console.log($(element).find("td:nth-child(1)").text());
    });
}
}