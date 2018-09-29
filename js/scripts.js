// Business logic
var gameRound=0;
var Check =0;
player2=0;
var run = (Math.floor(Math.random()*2)+1);
function roll() {
  var run = (Math.floor(Math.random()*2)+1);
  return(gameRound+=run);
}
// User interface
$(document).ready(function(){
  alert("Start Game!")
  $("#run").click(function(event){
    event.preventDefault();
    var tally=roll()

// Player 1 functionality
    function p1(){
      score1.innerHTML=gameRound;
      tally1.innerHTML=gameRound+run;
      score2.innerHTML=0;
      tally2.innerHTML=0;
      $("#hold").click(function(event){
        event.preventDefault();
        tally=run*2;

        tally1.innerHTML=tally;
      })

      if(run>1){
        p2();
      }
      else if(tally>=50||tally1.innerHTML>=50){
        alert("Great Job; Player 1 wins")
        results.innerHTML=("Great Job; Player 1 wins")
      }
      else{
        p1();
      }
    }

  // Player 2 functionality
    function p2(){
      score1.innerHTML=0;
      tally1.innerHTML=0;
      score2.innerHTML=gameRound;
      tally2.innerHTML=gameRound+run;
      $("#hold").click(function(){
        event.preventDefault();
        tally=gameRound*2;

        tally2.innerHTML=tally;
      })
      
      if (run<=1){
        // alert("Turn for player 1")
        p1();
      }
      else if(tally>=50||tally2.innerHTML>=50){
        alert("Great Job; Player 2 wins")
        results.innerHTML=("Great Job; Player 2 wins")
      }
      else{
        p2();
        alert("Game over");
        // results.innerHTML="";
      }
    }

    