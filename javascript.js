const rockBtn = document.querySelector("button.rock");
const paperBtn = document.querySelector("button.paper");
const scissorsBtn = document.querySelector("button.scissors");
const resetBtn = document.querySelector("button.reset");
const playerScoreCount = document.querySelector("span.player");
const robotScoreCount = document.querySelector("span.robot");
const roundCounter = document.querySelector("span.counter");
let playerChoice;
let robotChoice;
let playerScore = 0;
let robotScore = 0;
let round = 1;

function getRobotChoice(){
    let choice = Math.ceil(Math.random() * 3);

    if(choice == 1){return "rock";}
    if(choice == 2){return "paper";}
    if(choice == 3){return "scissors";}
}

function checkGameStatus(){
    if (playerScore >= 5){
        //stop game and give winning text, force player to use reset button
    }
    if(robotScore >= 5){
        //stop game and give losing text
    }
}

function playRound(playerChoice, robotChoice){
    let player = playerChoice.toLowerCase();
    let robot = robotChoice.toLowerCase();
    const win = "You win this round!";
    const lose = "You lose this round!";
    const tie = "It's a tie!";

    if(player == robot){
        playerScore++;
        robotScore++;
        playerScoreCount.textContent = `${playerScore}`;
        robotScoreCount.textContent = `${robotScore}`;
    }

    else if(player == "paper" && robot == "rock"){
        playerScore++;
        playerScoreCount.textContent = `${playerScore}`;
        robotScoreCount.textContent = `${robotScore}`;
    }

    else if(player == "rock" && robot == "scissors"){
        playerScore++;
        playerScoreCount.textContent = `${playerScore}`;
        robotScoreCount.textContent = `${robotScore}`;
    }

    else if(player == "scissors" && robot == "paper"){
        playerScore++;
        playerScoreCount.textContent = `${playerScore}`;
        robotScoreCount.textContent = `${robotScore}`;
    }

    else{
        robotScore++;
        playerScoreCount.textContent = `${playerScore}`;
        robotScoreCount.textContent = `${robotScore}`;
    }
}

resetBtn.addEventListener("click", () => {
    playerScore = 0;
    robotScore = 0;
    round = 1;
    playerScoreCount.textContent = `${playerScore}`;
    robotScoreCount.textContent = `${robotScore}`;
    roundCounter.textContent = `${round}`;
})

rockBtn.addEventListener("click", () => {
    round++;
    playerChoice = "rock";
    robotChoice = getRobotChoice();
    playRound(playerChoice, robotChoice);
    roundCounter.textContent = `${round}`;
});

paperBtn.addEventListener("click", () => {
    round++;
    playerChoice = "paper";
    robotChoice = getRobotChoice();
    playRound(playerChoice, robotChoice);
    roundCounter.textContent = `${round}`;
});

scissorsBtn.addEventListener("click", () => {
    round++;
    playerChoice = "scissors";
    robotChoice = getRobotChoice();
    playRound(playerChoice, robotChoice);
    roundCounter.textContent = `${round}`;
});
