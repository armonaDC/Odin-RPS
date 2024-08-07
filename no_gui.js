console.log("Hello World\n");

let humanPoints = 0;
let robotPoints = 0;

for(let i = 0; i < 5; i++){
    // let humanChoice = getHumanChoice();
    let robotChoice = getRobotChoice();

    playRound(humanChoice, robotChoice);

    console.log("\nHuman Points:" + humanPoints);
    console.log("\nRobot Points:" + robotPoints + "\n");
}

if(humanPoints == robotPoints){
    console.log("The game is a tie! :/");
}
else if(humanPoints > robotPoints){
    console.log("You win the game! :)");
}
else{
    console.log("You lost the game! T_T")
}

function getRobotChoice(){
    let choice = Math.ceil(Math.random() * 3);

    if(choice == 1){return "rock";}
    if(choice == 2){return "paper";}
    if(choice == 3){return "scissors";}
}

function getHumanChoice(){
    const message = "Rock, Paper, or Scissors?";
    let choice = prompt(message);
    return choice;
}

function playRound(humanChoice, robotChoice){
    let human = humanChoice.toLowerCase();
    let robot = robotChoice.toLowerCase();
    const win = "You win this round!";
    const lose = "You lose this round!";
    const tie = "It's a tie!";

    if(human == robot){
        return console.log(tie);
    }

    else if(human == "paper" && robot == "rock"){
        humanPoints++;
        return console.log(win + " " + human + " beats " + robot + "!");
    }

    else if(human == "rock" && robot == "scissors"){
        humanPoints++;
        return console.log(win + " " + human + " beats " + robot + "!");
    }

    else if(human == "scissors" && robot == "paper"){
        humanPoints++;
        return console.log(win + " " + human + " beats " + robot + "!");
    }

    else{
        robotPoints++;
        return console.log(lose + " " + robot + " beats " + human + "!");
    }
}