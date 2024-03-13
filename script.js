
let enterName = prompt("Enter your name"); 
let playerGuess;
let computerGuess = randomNum();
let playerFeedback = computerGuess;

loadDiv ()

function randomNum() {
    return Math.floor(Math.random() * (100 - 1 + 1) + 1)
}


function loadDiv () {
    document.getElementById("ScriptThisDIV").innerHTML = "<h1> Hello " + enterName + "</h1>"
    document.getElementById("ScriptThisDIV").innerHTML = document.getElementById("ScriptThisDIV").innerHTML + "<H2> Guess a Number bewteen 1 & 100 </H2>"
    document.getElementById("ScriptThisDIV").innerHTML = document.getElementById("ScriptThisDIV").innerHTML + playerFeedback ; 
}


function enterNumber () {
    playerGuess = prompt ("Enter a Number") 
}