
/**
 * @description main controller
 * @author Roger Puga Ruiz
 * @data 2022-01-22
 */

// activate login
login();

// activate logout
logout();

// activate alternate page
toggled_page(); 

// activate new data
let load_data = new Load();
load_data.run();

// activate load views and sortable lists
reload();

// activate right click on orders
right_click();

// activate order events
let order_controller = new Order_controller();
order_controller.delete("#delete");
order_controller.finalize("#finalize");