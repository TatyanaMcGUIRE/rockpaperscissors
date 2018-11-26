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
    
    userChoice = $("input").val()
    
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

    if(userChoice==="paper" && computerChoice==="scissors") {
       $("#result").text("YOU LOSE")
       
    }
    if(userChoice==="rock" && computerChoice==="scissors"){
        $("#result").text("WINNER!!!")
    }
    
    if(userChoice==="rock" && computerChoice==="paper"){
        $("#result").text("YOU LOSE")
    }
    
    if(userChoice==="paper" && computerChoice==="rock"){
        $("#result").text("WINNER!!!")
    }
    
    if(userChoice==="scissors" && computerChoice==="paper"){ 
        $("#result").text("WINNER!!!")
    }
    if(userChoice==="scissors" && computerChoice==="rock"){
        $("#result").text("YOU LOSE")
    } 
    if(userChoice==="paper" && computerChoice==="paper"){
        $("#result").text("NO WINNER")
    }
    
    if(userChoice==="scissors" && computerChoice==="scissors"){
         $("#result").text("NO WINNER")
    }
     if(userChoice==="rock" && computerChoice==="rock"){
         $("#result").text("NO WINNER")
    }
});


// DOCUMENT READY FUNCTION BELOW

