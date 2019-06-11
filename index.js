// JavaScript source code
"use strict";
let userWin = 0;
let userLoss = 0;
let userDraw = 0;
const rpsWin = document.getElementById("rpsWin");
const rpsLose = document.getElementById("rpsLose");
const rpsDraw = document.getElementById("rpsDraw");
var UserInput = document.getElementById("UserName");
var UserChoice = document.getElementById("UserChoice");
const name = document.getElementById("name");
const result = document.querySelector(".result > p");
const rock = document.getElementById("r");
const paper = document.getElementById("p");
const scissors = document.getElementById("s");

function getComputerChoice()
{
    const options = ['r', 'p', 's'];
    const ranNumber = (Math.floor(Math.random() * 3));
    return options[ranNumber];

}
function required()
{
    var empty = document.forms["nameForm"]["UserName"].value;
    if (empty =="")
    {
        alert ("Please enter a Name");
        return false;
    }
    else{
        return true
    }
    }

function convertWord(rpsLetter){
    if (rpsLetter === "r") return "Rock";
    if (rpsLetter === "p") return "Paper";
    if (rpsLetter === "s") return "Scissors";
}


function win(UserChoice, computerChoice) {
userWin++;
rpsWin.innerHTML = userWin;
result.innerHTML = convertWord(UserChoice) + " beats " + convertWord(computerChoice) + ". " + UserName.value + " " +  "Wins!";
}
function loss(UserChoice, computerChoice) {
    userLoss++;
    rpsLose.innerHTML = userLoss;
    result.innerHTML = convertWord(UserChoice) + " loses to " + convertWord(computerChoice) + ". " + UserName.value + " " +  "Loses!!!!";
   // result.innerHTML = convertWord

}
function tie(UserChoice, computerChoice) {
    userDraw++;
    rpsDraw.innerHTML  = userDraw;
    result.innerHTML = convertWord(UserChoice) + " equals " + convertWord(computerChoice) + ". " + UserName.value + " " +  "TIES WITH THE COMPUTER";
}

function rpsGame (UserChoice)
{
    const computerChoice = getComputerChoice();
    switch (UserChoice + computerChoice)
    {
        case "rs":
        case "pr":
        case "sp":
            win(UserChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            loss(UserChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            tie(UserChoice, computerChoice);
            break;
    }
}

nameButton.addEventListener("click", function (nameButtonClickEvent) {
  
    nameButtonClickEvent.preventDefault();
   
   
    nameWelcome.className = "hidden";
    rpsGameForm.className = "";

    //name.innerHTML = UserName.value;
   
});   
    
    
    

rpsGameForm.addEventListener("click", function (rpsGameForm)
{
    rpsGameForm.preventDefault();
   
    
});
//gameForm.addEventListener("submit", function (gameFormEvent) {

//gameFormEvent.preventDefault();
//selectionButton.addEventListener("click", function(selectionButtonEvent)
//{
    //selectionButton.preventDefault();
    
//});





 


//});
//selectRps.addEventListener("click", function (selectRpsEvent)
//{
   
//})
resetGame.addEventListener("click" , function (resetGameEvent)
{
    resetGameEvent.preventDefault();
    nameWelcome.className = "";
    rpsGameForm.className ="hidden";
    rpsLose.innerHTML = 0;
    rpsWin.innerHTML = 0;
    rpsDraw.innerHTML = 0;
    UserName.value = "";
    result.innerHTML = "";
   
});
function main()
{
rock.addEventListener("click", function (rockEvent)
{
    rpsGame("r");
})
paper.addEventListener("click", function(paperEvent)
{
    rpsGame("p");
})
scissors.addEventListener("click", function(scissorsEvent)
{
    rpsGame("s");
})
}

main();