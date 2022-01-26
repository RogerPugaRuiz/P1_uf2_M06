
/**
 * @description Machine class in charge of receiving queued orders
 * @author Roger Puga Ruiz
 * @data 2022-01-22
 * @extends Tail
 */
class Machine extends Tail{
    // attributes
    #id // int
    #type // string

    // constructor
    constructor (id,type){
        super();
        this.#id = id;
        this.#type = type;
    }

    // methods

    /**
     * 
     * @returns string
     */
    get_id(){
        return this.#id;
    }
    /**
     * 
     * @returns string
     */
    get_type(){
        return this.#type;
    }

    set_type(type){
        this.#type = type;
    }

    /**
     * @description method to return a string representation that object
     * @returns string
     */
    to_string(){
        return "[" + this.#id + "; " + this.#type + "; " + super.to_string() + "]";
    }

}