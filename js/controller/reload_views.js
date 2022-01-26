/**
 * @description reload view when change the information
 * @author Roger Puga Ruiz
 * @date 2022-01-22
 */

function reload() {

    $("document").unbind("click");


    // sort new orders position
    load_data.get_pending_order().sort_tail();
    load_data.get_machines().get_list().forEach(function (order) {
        order.sort_tail();
    });

    // activate view pending orders
    let view_pending_orders = new View_pending_orders(load_data.get_pending_order());
    view_pending_orders.empty($(".commands"));
    view_pending_orders.to_html($(".commands"));

    // activate view machines
    let view_machines = new View_machines(load_data.get_machines());
    view_machines.empty($(".machines"))
    view_machines.to_html($(".machines"));

    // activate order events
    let order_controller = new Order_controller();
    order_controller.delete(".delete");
    order_controller.finalize(".finalize");

    // activate sortable list
    let sortable_list = new Sortable_list();
    sortable_list.pending_orders();


    // activate view config
    let view_conf = new View_conf(load_data.get_machines());
    view_conf.to_html("table");

    // activate machine events
    let machine_controller = new Machine_controller();
    let add = machine_controller.add_machine("#add_machine");
    let delete_machine = machine_controller.delete_machine(".delete_machine");
    machine_controller.submit_machine("#submit_machines");
}