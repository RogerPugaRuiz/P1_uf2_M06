/**
 * @description Class to save array information in cookies
 * @date 2022-01-26
 */

class Persistent{
    #state;
    set_cookie(){
        $.cookie("machine_cookie",load_data.get_machines());
        $.cookie("pending_order_cookie",load_data.get_pending_order());
    }

    get_machines(){
        return $.cookie("machine_cookie");
    }
    get_pending_order(){
        return $.cookie("pending_order_cookie");
    }
}