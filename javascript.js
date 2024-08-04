"use strict";
const buttons = document.querySelectorAll("button");
const playerScoreCount = document.querySelector("span.player");
const robotScoreCount = document.querySelector("span.robot");
const roundCounter = document.querySelector("span.counter");
const playerChoiceElement = document.querySelector(".player.choice");
const robotChoiceElement = document.querySelector(".robot.choice");
const playSpace = document.querySelector(".weapon-container")
const winText = document.createElement("p");
const loseText = document.createElement("p");
let playerChoice = "";
let robotChoice = "";
let playerScore = 0;
let robotScore = 0;
let round = 1;

winText.classList.toggle("win");
winText.textContent = "YOU WIN!";
loseText.classList.toggle("lose");
loseText.textContent = "YOU LOSE!";

function getRobotChoice(){
    let choice = Math.ceil(Math.random() * 3);

    if(choice == 1){return "rock";}
    if(choice == 2){return "paper";}
    if(choice == 3){return "scissors";}
}

function disarmPlayer(){
    buttons.forEach((button) => {
        if(button.textContent != "RESET"){
            button.disabled = true;
        }
    })
}

function armPlayer(){
    buttons.forEach((button) => {
        button.disabled = false;
    })
}

function removeResultText(){
    let children = playSpace.childNodes;
    const lastChild = children[children.length - 1];
    if(lastChild.textContent == "YOU WIN!"){
        playSpace.removeChild(winText);
    }
    else if(lastChild.textContent == "YOU LOSE!"){
        playSpace.removeChild(loseText);
    }
    else{
        return;
    }
}

function checkGameStatus(){
    if (playerScore >= 3){
        disarmPlayer();
        playSpace.appendChild(winText);
    }
    else if(robotScore >= 3){
        disarmPlayer();
        playSpace.appendChild(loseText);
    }
    else{
        return;
    }
}

function playRound(playerChoice, robotChoice){
    let player = playerChoice.toLowerCase();
    let robot = robotChoice.toLowerCase();
    if(player == robot){
        return;
    }
    else if(player == "paper" && robot == "rock"){
        playerScore++;
    }
    else if(player == "rock" && robot == "scissors"){
        playerScore++;
    }
    else if(player == "scissors" && robot == "paper"){
        playerScore++;
    }
    else{
        robotScore++;
    }
}

buttons.forEach((button) =>{
    button.addEventListener("click", onBtnClick);
})

function onBtnClick(e){
    if(e.target.textContent == "RESET"){
    armPlayer();
    removeResultText();
    playerScore = 0;
    robotScore = 0;
    playerChoice = "";
    robotChoice = "";
    round = 1;
    }
    else {
    round++;
    playerChoice = e.target.alt;
    robotChoice = getRobotChoice();
    playRound(playerChoice, robotChoice);
    }

    playerChoiceElement.textContent = `Weapon: ${playerChoice}`;
    robotChoiceElement.textContent = `Weapon: ${robotChoice}`;
    playerScoreCount.textContent = `${playerScore}`;
    robotScoreCount.textContent = `${robotScore}`;
    roundCounter.textContent = `${round}`;
    checkGameStatus();
}
