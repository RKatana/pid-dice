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

    
