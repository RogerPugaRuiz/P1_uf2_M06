/**
 * @description delete and finalize the order when event click
 * @date 2022-01-23
 */

class Order_controller{

    /**
     * @description method to delete a tail order
     * @param {obj} jq_obj 
     */
    delete(jq_obj){
        $(jq_obj).on("click",function (event, ui){
            let id_html_order = $(jq_obj).parent().parent().attr("id");
            load_data.get_machines().get_list().forEach(function (machine, index, array){
                if (machine.remove_order(id_html_order)){
                    
                }
            });
            console.log()
            console.log("click");
        });
    }

    /**
     * @description method to delete a tail order
     * @param {obj} jq_obj 
     */
    finalize(jq_obj){
        $(jq_obj).on("click",function (event, ui){
            console.log("click");
        })
    }
}