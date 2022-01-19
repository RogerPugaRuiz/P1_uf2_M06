
/**
 * Class command that class create a diferent type of pece.
 * type: A, B, C, D
 * state: 0 -> pending , 1 -> machine 1 , 2 -> machine 2, 3 -> machine 3, 4 -> machine 4.
 * position: order in list.
 */
class Command{
    constructor (client_name, pece_name, type, quantity, state, position){
        this.client_name = client_name;
        this.pece_name = pece_name;
        this.type = type;
        this.quantity = quantity;
        this.state = state;
        this.position = position;
        let options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
        let today  = new Date();
        this.date_time = today.toLocaleDateString("es-EU",options);
    }
}