
/**
 * @description load class that receives data and loads it into the application model
 * @author Roger Puga Ruiz
 * @date 2022-01-22
 */
class Load{

    // attributess
    #pending_order; // Class Pending_order
    #machines; // Class Machines

    // constructors
    constructor(){
        this.#pending_order = new Pending_order();
        this.#machines = new Machines();
    }

    run(){
        // reset
        this.#pending_order = new Pending_order();
        this.#machines = new Machines();

        // load pending order
        this.#pending_order.add_order(new Order("Ferreterias David","Tornillos","B",20,0,0));
        this.#pending_order.add_order(new Order("Ferreterias Lucas","Clavos","A",10,0,1));
        this.#pending_order.add_order(new Order("Ferreterias Ramon","Pernos","B",20,0,2));
        this.#pending_order.add_order(new Order("Ferreterias Lucas","Arandelas","C",10,0,3));
        this.#pending_order.add_order(new Order("Ferreterias Ramon","Columnillas","B",30,0,4));
        this.#pending_order.add_order(new Order("Ferreterias Lus","Remaches","D",50,0,5));

        // load machines
        this.#machines.add(new Machine(0,"A"));
        this.#machines.add(new Machine(1,"B"));
        this.#machines.add(new Machine(2,"C"));
        this.#machines.add(new Machine(3,"D"));
    }

    get_pending_order(){
        return this.#pending_order;
    }

    get_machines(){
        return this.#machines;
    }

    to_string(){
        return "[pending_order:[" + this.#pending_order.to_string() + "]" + "[machines:[" + this.#machines.to_string() + "]";
    }
}