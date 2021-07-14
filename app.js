

let playerPlay = prompt("rock, paper or scissors?");
const playerSelection = playerPlay.toLowerCase();

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
        return "It's a tie";
    
    else if 
        (playerSelection === "rock" && computerSelection === "scissors" ||
        playerSelection === "paper" && computerSelection === "rock" ||
        playerSelection === "scissors" && computerSelection === "paper")
        return "You win";

    else 
        return "You lost";

}


const computerSelection = computerPlay();


console.log(playRound(playerSelection, computerSelection));


//Enter Player selection, then computer selection, then combine both to determine winner!
//I guess this is the logical of the game. Can be computer first and player second, 
//doesn't really matters as both are nedded before output results...
//so PROBLEM SOLVE:
//1st computer move
//2nd player move or vice-versa
//3th combine both and outcome result
//4th create a 5 round game