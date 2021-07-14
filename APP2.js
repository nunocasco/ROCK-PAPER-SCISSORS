

let playerPlay = prompt("rock, paper or scissors?").toLowerCase();


function computerPlay() {
    switch(Math.floor(Math.random()*3)) {
        case 0:
            return "rock";
            break;
        case 1:
            return "paper";
            break;
        case 2:
            return "scissors";
            break;
    }
} 

function playRound(playerSelection, computerSelection) {
    if 
        (playerSelection === computerSelection)
        return 0;
    
    else if 
        (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper")
        return 1;

    else 
        return 2;

}

const playerSelection = playerPlay;
const computerSelection = computerPlay();
let myScore = 0;
let pcScore = 0;

function game(playRound, playerSelection, computerSelection) {
    for (let i = 0; i < 5; i++)
    if 
        (playerSelection === computerSelection)
        return "Tie";
    
    if 
        (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper")
        myScore++;
        return "win";

}
