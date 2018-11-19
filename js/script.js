 // *************************** YOUR CODE BELOW *******************************
//******************TEST EARLY AND OFTEN USING console.log() ******************
//****************** SERIOUSLY TEST USING console.log()!!! ******************

//GLOBAL VARIABLES
/* global $ */
var userChoice="";
var computerChoice="";
var winner="";
var randomNumber=0;
$("button").click(function(){
    
    userChoice= $("input").val()
$("#userChoice").text($("input").val());
randomNumber= Math.random()
if(randomNumber<.33){
    computerChoice= "rock"
}
else if (randomNumber<.66){
    computerChoice= "paper"
}
else{
    computerChoice= "scissors"
}
$("#computerChoice").text(computerChoice)
});


// DOCUMENT READY FUNCTION BELOW

