
/**
 * @description Create new order and test
 * @returns true if test is correct
 */
function order_test() {
    let order = new Order("Ferreterias David","Clavos","C",50,0,0);

    // regex expected
    let expected = /\[Ferreterias David; Clavos; C; 50; 0; 0; sábado, 22 de enero de 2022\]/;
    console.log(order.to_string());
    return expected.test(order.to_string());
}

/**
 * @description Create new machine and test
 * @returns true if test is correct
 */
function machine_test1() {
    let obj = new Machine(0,"A");
    obj.add_order(new Order("Ferreterias David","Clavos","C",50,0,0));
    obj.add_order(new Order("Ferreterias Lucas","Tornillos","D",50,0,0));

    let expected = /0; A; \[\[Ferreterias David; Clavos; C; 50; 0; 0; sábado, 22 de enero de 2022\], \[Ferreterias Lucas; Tornillos; D; 50; 0; 0; sábado, 22 de enero de 2022\]\]/;
    console.log(obj.to_string());
    return expected.test(obj.to_string());

}

/**
 * @description Find and remove order by id order
 * @returns true if test is correct
 */
function machine_test2() {
    let obj = new Machine(0,"A");
    obj.add_order(new Order("Ferreterias David","Clavos","C",50,0,0));
    obj.add_order(new Order("Ferreterias Lucas","Tornillos","D",50,0,1));
    obj.remove_order(1);
    let expected = /\[0; A; \[\[Ferreterias David; Clavos; C; 50; 0; 0; sábado, 22 de enero de 2022\]\]\]/;
    console.log(obj.to_string());
    return expected.test(obj.to_string());
}

/**
 * @description Find and remove order by id order but it not exist
 * @returns true if test is correct
 */
function machine_test3() {
    let obj = new Machine(0,"A");
    obj.add_order(new Order("Ferreterias David","Clavos","C",50,0,0));
    obj.add_order(new Order("Ferreterias Lucas","Tornillos","D",50,0,1));
    obj.remove_order(10);
    
    let expected = /\[0; A; \[\[Ferreterias David; Clavos; C; 50; 0; 0; sábado, 22 de enero de 2022\], \[Ferreterias Lucas; Tornillos; D; 50; 0; 1; sábado, 22 de enero de 2022\]\]\]/;
    console.log(obj.to_string());
    return expected.test(obj.to_string());
}

/**
 * @description Create new tail and test
 * @returns true if test is correct
 */
function tail_order_test1() {
    let obj = new Tail();
    obj.add_order(new Order("Ferreterias David","Clavos","C",50,0,0));
    obj.add_order(new Order("Ferreterias Lucas","Tornillos","D",50,0,1));

    let expected = /\[\[Ferreterias David; Clavos; C; 50; 0; 0; sábado, 22 de enero de 2022\], \[Ferreterias Lucas; Tornillos; D; 50; 0; 1; sábado, 22 de enero de 2022\]\]/;
    console.log(obj.to_string());
    return expected.test(obj.to_string());
}

/**
 * @description Create new pending order and test
 * @returns true if test is correct
 */
function  pending_order_test1() {
    let obj = new Pending_order();
    obj.add_order(new Order("Ferreterias David","Clavos","C",50,0,0));
    obj.add_order(new Order("Ferreterias Lucas","Tornillos","D",50,0,1));
    console.log(obj.to_string());
    let expected = /\[\[Ferreterias David; Clavos; C; 50; 0; 0; sábado, 22 de enero de 2022\], \[Ferreterias Lucas; Tornillos; D; 50; 0; 1; sábado, 22 de enero de 2022\]\]/;

    return expected.test(obj.to_string());
}

/**
 * @description Create new machines and test
 * @returns true if test is correct
 */
function machines_test1() {
    let machine1 = new Machine(0,"A");
    machine1.add_order(new Order("Ferreterias David","Clavos","A",50,0,0));
    machine1.add_order(new Order("Ferreterias Lucas","Tornillos","A",50,0,0));

    let machine2 = new Machine(1,"B");
    machine2.add_order(new Order("Ferreterias David","Clavos","B",50,0,0));
    machine2.add_order(new Order("Ferreterias Lucas","Tornillos","B",50,0,0));

    let machines = new Machines();
    machines.add(machine1);
    machines.add(machine2);

    let expected = '[[0; A; [[Ferreterias David; Clavos; A; 50; 0; 0; sábado, 22 de enero de 2022], [Ferreterias Lucas; Tornillos; A; 50; 0; 0; sábado, 22 de enero de 2022]]], [1; B; [[Ferreterias David; Clavos; B; 50; 0; 0; sábado, 22 de enero de 2022], [Ferreterias Lucas; Tornillos; B; 50; 0; 0; sábado, 22 de enero de 2022]]]]';
    console.log(machines.to_string());

    return expected == machines.to_string();
}

/**
 * @description Create new load data and test
 * @returns true if test is correct
 */
function load() {
    let load = new Load();
    load.run();
    
    expected = '[pending_order:[[[Ferreterias David; Tornillos; B; 20; 0; 0; sábado, 22 de enero de 2022], [Ferreterias Lucas; Clavos; A; 10; 0; 1; sábado, 22 de enero de 2022], [Ferreterias Ramon; Pernos; B; 20; 0; 2; sábado, 22 de enero de 2022], [Ferreterias Lucas; Arandelas; C; 10; 0; 3; sábado, 22 de enero de 2022], [Ferreterias Ramon; Columnillas; B; 30; 0; 4; sábado, 22 de enero de 2022], [Ferreterias Lus; Remaches; D; 50; 0; 5; sábado, 22 de enero de 2022]]][machines:[[[0; A; []], [1; B; []], [2; C; []], [3; D; []]]]';

    return expected == load.to_string();
}

// show test
let pile_test = [
    order_test(),
    tail_order_test1(),
    machine_test1(),
    machine_test2(),
    machine_test3(),
    pending_order_test1(),
    machines_test1(),
    load()
];
let pile_view_test = [
    "order_test1",
    "tail_order_test1",
    "machine_test1",
    "machine_test2",
    "machine_test3",
    "pending_order_test1",
    "machines_test1",
    "load1"
];

for (let index = 0; index < pile_view_test.length; index++) {
    const element = pile_view_test[index];
    const test = pile_test[index];
    let element_html = document.getElementById(element);
    if (test){
        element_html.classList.add("true");
    }else{
        element_html.classList.add("false");
    }

    element_html.innerText = test
}




