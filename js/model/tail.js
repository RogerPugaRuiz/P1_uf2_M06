
class Tail {

    // attributes
    #tail // array of Order

    // constructors
    constructor() {
        this.#tail = [];
    }

    // methods

    /**
     * @description add new Order in tail
     * @param object Order
     */
    add_order(order) {
        this.#tail.push(order);
        this.tail_cleaning();
        this.update();
    }

    /**
     * @description update index
     */
    update(){
        this.#tail.forEach(function (order, index, array) {
            order.set_position(index+1);
        }); 
    }

    /**
     * @description remove order by id
     * @param {int} id 
     * @returns false if not exist id, or return order finding
     */
    remove_order(id) {
        let order_find = this.#tail.find(function (order, index, array) {
            if (order.get_id() == id) {
                delete array[index];
                return order;
            } else {
                return false;
            }
        });
        this.tail_cleaning();
        this.update();
        return order_find;
    }

    find_by_id(id){
        let result;
        this.#tail.forEach(function (order, index) {
            if (order.get_id() == id){
                result =  order;
            }
        });
        return result;
    }


    tail_cleaning() {
        let clean = [];
        for (let index = 0; index < this.#tail.length; index++) {
            const element = this.#tail[index];
            if (typeof element != 'undefined') {
                clean.push(element);
            }
        }
        this.#tail = clean;
    }

    sort_tail(){
        let sort = [];
        for (let j = 1; j <= this.#tail.length; j++) {
            this.#tail.forEach(function (order, index, array){
                console.log(order.get_position());
                if (j == order.get_position()){
                    sort.push(order);
                }
            });    
        }
        this.#tail = sort;
    }

    /**
     * 
     * @returns array of Orders
     */
    get_tail() {
        return this.#tail;
    }

    to_string() {
        let data = "";
        data += "[";
        for (let index = 0; index < this.#tail.length; index++) {
            const element = this.#tail[index];
            if (element != undefined) {
                data += element.to_string();
            } else {
                data += "[]";
            }
            if (index != this.#tail.length - 1) {
                data += ", ";
            }
        }
        data += "]";
        return data;
    }
}