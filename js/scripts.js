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

    