
/**
 * @description
 * @author Roger Puga Ruiz
 * @date 2022-01-22
 */

class Machines{
    // attribute
    #machines // array of machines

    // constructors
    constructor(){
        this.#machines = [];
    }

    // methods

    /**
     * @description method to add new machine
     * @param {Machine} machine 
     */
    add(machine){
        this.#machines.push(machine);
    }

    get_index(id){
        let result;
        this.#machines.forEach(function (machine, index) {
            if (machine.get_id() == id){
                result =  index;
            }
        });
        return result;
    }

    find_by_id(id){
        let result;
        this.#machines.forEach(function (machine, index) {
            if (machine.get_id() == id){
                result =  machine;
            }
        });
        return result;
    }
    get_list(){
        return this.#machines;
    }

    to_string(){
        return this.#show_machines();
    }

    #show_machines(){
        let data = "";
        data += "[";
        for (let index = 0; index < this.#machines.length; index++) {
            const element = this.#machines[index];
            if (element != undefined) {
                data += element.to_string();
            } else {
                data += "[]";
            }
            if (index != this.#machines.length - 1) {
                data += ", ";
            }
        }
        data += "]";
        return data;
    }
}