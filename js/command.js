
/**
 * Class command that class create a diferent type of pece.
 */
class Command{
    constructor (client_name, pece_name, type, quantity, state, position){
        this.client_name = client_name;
        this.pece_name = pece_name;
        this.type = type;
        this.quantity = quantity;
        this.state = state;
        this.position = position;
    }
}