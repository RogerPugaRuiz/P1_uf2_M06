
  /**
   * Commands order
   */
  $( function() {
    $( "#sortable1, #sortable3" ).sortable({
      connectWith: ".connectedSortable",
      start: function( event, ui ) {
        ui.item.css("box-shadow", "10px 10px black");
        let className = ui.item[0].className;
        let arrayClassName = className.split(" ");
        let typeCommand = arrayClassName[1];
        $(".machine").each(function(){
          let className = this.className;
          let arrayClassName = className.split(" ");
          let typeMachine = arrayClassName[1];

          if (typeCommand == typeMachine){
            $(this).css("border","3px solid green");
          }else{
            $(this).css("border"," 3px solid red");
          }
        });
      },
      stop: function( event, ui ) {
        ui.item.css("box-shadow", "2px 2px black");
        $(".machine").each(function(){
          $(this).css("border","none");
        });
        let classNameC = ui.item[0].className;
        let arrayClassNameC = classNameC.split(" ");
        let typeCommand = arrayClassNameC[1];

        let classNameM = ui.item[0].parentNode.parentNode.className;
        let arrayClassNameM = classNameM.split(" ");
        let typeMachine = arrayClassNameM[1];
        console.log(typeCommand + " " + typeMachine);
        if (typeCommand != undefined && typeMachine != undefined && typeMachine != typeCommand){
          $("#sortable1").sortable("cancel");
        }
      },
      placeholder: "ui-state-command"
    }).disableSelection();
  } );

  /**
   * Machines order
   */
  $(function(){
    $("#sortable2").sortable(
      {
      stop: function( event, ui ) {
        ui.item.css("box-shadow", "2px 2px black");
        console.log(ui.item);
      },
      start: function( event, ui ) {
        ui.item.css("box-shadow", "10px 10px black");
        console.log(ui.item);
      },
      placeholder: "ui-state-machine"
      }
    );
  });
