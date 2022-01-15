
  $( function() {
    $( "#sortable1, #sortable3" ).sortable({
      connectWith: ".connectedSortable",
      stop: function( event, ui ) {
        ui.item.css("box-shadow", "2px 2px black");
        console.log(ui.item)
      },
      start: function( event, ui ) {
        ui.item.css("box-shadow", "10px 10px black");
        console.log(ui.item)
      }
    }).disableSelection();
  } );

  $(function(){
    $("#sortable2").sortable(
      {
      stop: function( event, ui ) {
        ui.item.css("box-shadow", "2px 2px black");
        console.log(ui.item)
      },
      start: function( event, ui ) {
        ui.item.css("box-shadow", "10px 10px black");
        console.log(ui.item)
      }
      }
    );
  });
