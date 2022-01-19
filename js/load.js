
// if not exist data load client data.
if (typeof $.cookie('machines') === 'undefined' && $.cookie('commands') === 'undefined'){
    var commands = [];
    commands.push(new Command("Ferreterias David","Clavos","C",50,0,0));
    commands.push(new Command("Ferreterias Lucas","Tornillos","C",20,0,1));
    commands.push(new Command("Ferreterias Lucas","Tornillos","A",10,0,2));

    console.log(commands);

    var machines = [];
    machines.push(new Machine(0,"A",0));
    machines.push(new Machine(1,"B",0));
    machines.push(new Machine(2,"C",0));
    machines.push(new Machine(3,"D",0));

    console.log(machines);

    load(commands, machines);

    

} else {
    
    $.cookie('commands',JSON.stringify(commands));
    $.cookie('machines',JSON.stringify(machines));
    let parCom = JSON.parse($.cookie('commands'));
    var parMac = JSON.parse($.cookie('machines'));

    console.log($.cookie('machines'));
    console.log($.cookie('commands'));
    load(parCom, parMac);
    
    
}

/**
 * Main load function
 * @param {array commands} commands 
 * @param {array machines} machines 
 */
function load(commands, machines){
    load_commands(commands);
    load_machines(machines);
}

function load_commands(commands){
    for (let index = 0; index < commands.length; index++) {
        const element = commands[index];
        let html_command = $("<li class='command " + element.type + "'></li>");
        let div = $("<div class='inline'></div>");
        html_command.append("<h3>" + element.client_name + "</h3>");
        div.append("<p>" + element.pece_name + "</p>");
        div.append("<p>" + element.quantity + "</p>");
        div.append("<p class='pos'>" + element.position + "</p>");
        html_command.append(div);
        html_command.append("<div class='expand'><p>" + element.date_time + "</p><input type='button' value='delete' id='delete'><input type='button' value='finalize' id='finalize'> </div>")
        $(".commands").append(html_command);
    }
}

function load_machines(machines){
    for (let index = 0; index < machines.length; index++) {
        const element = machines[index];
        let html_machines = $("<li class='machine " + element.type + "'></li>");
        let box = $("<ul class='box connectedSortable' id='sortable3'></ul>");
        html_machines.append("<p>" + element.type + "</p>");
        html_machines.append("<p>" + element.tail + "</p>");
        html_machines.append(box);
        $(".machines").append(html_machines);
    }
}
   