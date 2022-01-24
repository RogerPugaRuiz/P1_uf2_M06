/**
 * @description reload view when change the information
 * @author Roger Puga Ruiz
 * @date 2022-01-22
 */

function reload() {

    // sort new orders position
    load_data.get_pending_order().sort_tail();
    load_data.get_machines().get_list().forEach(function (order){
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

    // activate view config
    let view_conf = new View_conf(load_data.get_machines());
    view_conf.to_html("table");

    // activate sortable list
    let sortable_list = new Sortable_list();
    sortable_list.pending_orders();
    sortable_list.machines();

}