
/**
 * @description Order class of machined parts state: 0 -> pending , 1 -> machine 1 , 2 -> machine 2, 3 -> machine 3, 4 -> machine 4. position: order in list.
 * @data 2022-01-22
 */
class Order{
    // attributes
    #client_name;
    #pece_name;
    #type;
    #quantity;
    #state;
    #id ;
    #date_time;
    #position;

    // constructor
    constructor (client_name, pece_name, type, quantity, state, id){
        this.#client_name = client_name;
        this.#pece_name = pece_name;
        this.#type = type;
        this.#quantity = quantity;
        this.#state = state;
        this.#id = id;
        this.#date_time = this.#get_date({ weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' });
    }

    // methods

    /**
    * @description method to generate new date when you create new Order Class
    * @param options object with key:value example { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' }
    * @returns string format date
    **/
    #get_date (options){
        let today  = new Date();
        return today.toLocaleDateString("es-EU",options);
    }


    /**
     * @description method to set new position
     * @param {int} position 
     */
    set_position(position){
        this.#position = position;
    }
    get_position(){
        return this.#position;
    }
    get_client_name(){
        return this.#client_name;
    }

    get_pece_name(){
        return this.#pece_name;
    }
    
    get_type(){
        return this.#type;
    }

    get_quantity(){
        return this.#quantity;
    }
    get_state(){
        return this.#state;
    }
    get_id(){
        return this.#id;
    }
    get_date_time(){
        return this.#date_time;
    }

    /**
     * @description method to return a string representation that object
     * @returns string
     */
    to_string(){
        return "[" + this.#client_name + "; " + this.#pece_name + "; " + this.#type + "; " + this.#quantity + "; " + this.#state + "; " + this.#id + "; " + this.#date_time + "]";
    }
}