
// if not exist data load client data.
if (typeof $.cookie('current_session') === 'undefined'){
    let commands = [];
    commands.push(new Command("Ferreterias David","Clavos","C",50,0,0));
    commands.push(new Command("Ferreterias Lucas","Tornillos","C",20,0,1));
    commands.push(new Command("Ferreterias Lucas","Tornillos","A",10,0,2));

    console.log(commands);

    let machines = [];
    machines.push(new Machine(0,"A",0));
    machines.push(new Machine(1,"B",0));
    machines.push(new Machine(2,"C",0));
    machines.push(new Machine(3,"D",0));

    console.log(machines);

    load(commands, machines);
} else {
    //have cookie
}

function load(commands, machines){
    load_commands(commands);
    load_machines(machines);
}

function load_commands(commands){
    for (let index = 0; index < commands.length; index++) {
        const element = commands[index];
        let html_command = $("<li class='command'></li>");
        let div = $("<div class='inline'></div>");
        html_command.append("<h3>" + element.client_name + "</h3>");
        div.append("<p>" + element.pece_name + "</p>");
        div.append("<p>" + element.quantity + "</p>");
        div.append("<p class='pos'>" + element.position + "</p>");
        html_command.append(div);
        $(".commands").append(html_command);
    }
}

function load_machines(machines){
    for (let index = 0; index < machines.length; index++) {
        const element = machines[index];
        let html_machines = $("<li class='machine'></li>");
        let box = $("<ul class='box connectedSortable' id='sortable3'></ul>");
        html_machines.append("<p>" + element.type + "</p>");
        html_machines.append("<p>" + element.tail + "</p>");
        html_machines.append(box);
        $(".machines").append(html_machines);
    }
}
   