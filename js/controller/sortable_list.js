/**
 * @description all function that use jQuery sortable
 * @author Roger Puga Ruiz
 * @data 2022-01-22
 */

class Sortable_list {
    pending_orders() {
        $(function () {
            $("#sortable1, #sortable3").sortable({
                connectWith: ".connectedSortable",
                start: function (event, ui) {
                    ui.item.css("box-shadow", "10px 10px black");
                    let className = ui.item[0].className;
                    let arrayClassName = className.split(" ");
                    let typeCommand = arrayClassName[1];
                    $(".machine").each(function () {
                        let className = this.className;
                        let arrayClassName = className.split(" ");
                        let typeMachine = arrayClassName[1];

                        if (typeCommand == typeMachine) {
                            $(this).css("border", "3px solid green");
                        } else {
                            $(this).css("border", " 3px solid red");
                        }
                    });
                },
                stop: function (event, ui) {

                    ui.item.css("box-shadow", "2px 2px black");
                    $(".machine").each(function () {
                        $(this).css("border", "none");
                    });
                    let classNameC = ui.item[0].className;
                    let arrayClassNameC = classNameC.split(" ");
                    let typeCommand = arrayClassNameC[1];

                    let classNameM = ui.item[0].parentNode.parentNode.className;
                    let arrayClassNameM = classNameM.split(" ");
                    let typeMachine = undefined;

                    if (arrayClassNameM[1]) {
                        typeMachine = arrayClassNameM[1];
                    }

                    if (typeof typeMachine !== "undefined") {
                        if (typeCommand != typeMachine) {
                            $(this).sortable("cancel");
                        } else {
                            // Save data
                            let id_order = $($(ui.item)[0]).attr("id");
                            let id_machine = $($(ui.item)).parent().parent().attr("id");

                            // get order and remove
                            let order = load_data.get_pending_order().remove_order(id_order);

                            // get index in array machine
                            let index = load_data.get_machines().get_index(id_machine);

                            // add order in machine with the index
                            load_data.get_machines().get_list()[index].add_order(order);
                        }
                    }

                    $(".command").each(function (index, element) {
                        let id_html_order = $(element).attr("id");
                        

                        load_data.get_pending_order().get_tail().forEach(function (order, i, array) {
                            if (id_html_order == order.get_id()){
                                order.set_position(index +1 );
                                console.log(order.get_position());
                            }
                        });
                    });

                    // reload views
                    reload();
                },
                update: function (event, ui) {

                },
                placeholder: "ui-state-command"
            }).disableSelection();
        });
    }

    machines() {
        $(function () {
            $("#sortable2").sortable(
                {
                    stop: function (event, ui) {
                        ui.item.css("box-shadow", "2px 2px black");
                    },
                    start: function (event, ui) {
                        ui.item.css("box-shadow", "10px 10px black");

                    },
                    placeholder: "ui-state-machine"
                }
            );
        });
    }
}