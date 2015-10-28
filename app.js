/* your code should go here */
//var numeri = [1, 2, 3, 4, 5, 6, 7, 8, 9];
var template =  '<li id=ID class="done"> ' +
                '<h3>NUMB</h3>' +
                '</li>';
var numeroScoperto = 1;

// Three main classes of cards:
// done: when the user has discovered the pair of cards
// hidden: when the card has not been discovered yet
$(document).ready(function(){

  // Creo dinamicamente le varie carte
  for (i = 0; i < data.length; i++) {
    var newCard = template.replace('ID', i);
    newCard = newCard.replace("NUMB", data[i]);
    $("ul").append(newCard);
  }

  //Al click sul pulsante "START" nascondo prima tutte le carte,
  // applico i listener a ogni carta che al click gestiscono il gioco
  $(".opt-start").on("click", function(){
    $( "li" ).each(function( index ) {
      if ($(this).hasClass("done")){
        $(this).removeClass("done");
        $(this).addClass("hidden");
      }
    });

    for (i = 0; i < data.length; i++) {
      var myId = '#' + i;

      $(myId).click(function(){
        if(numeroScoperto==data.length){
          alert("Hai vintoh! =D");
          location.reload();
        }
        if ( $(this).text() == numeroScoperto){
          $(this).removeClass("hidden");
          $(this).addClass("done");
          numeroScoperto++;
        }
        else{
          alert("Hai perso D=");
          location.reload();
        }
      });
    }
  });
});
