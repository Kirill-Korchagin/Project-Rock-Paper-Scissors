function getComputerChoice() {
    let choice = Math.random()*3;
    if (choice <= 1) {
        choice = "Rock";
    } else if (choice <= 2) {
        choice = "Paper";
    } else {
        choice = "Scissors";
    }
    return choice
}

function playRound(playerSelection, computerSelection) {
    let player = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase();
    let computer = computerSelection;
    if (player === "Rock" && computer === "Paper") {
        return "You Lose! Paper beats Rock";
    } else if (player === "Scissors" && computer === "Rock") {
        return "You Lose! Rock beats Scissors";
    } else if (player === "Paper" && computer === "Scissors") {
        return "You Lose! Scissors beat Paper";
    } else if (player === "Paper" && computer === "Rock"){
        return "You Win! Paper beats Rock";
    } else if (player === "Rock" && computer === "Scissors") {
        return "You Win! Rock beats Scissors";
    } else if (player === "Scissors" && computer === "Paper") {
        return "You Win! Scissors beat Paper";      
    } else {
        return "It's a tie, play again!";
    }
}

// const playerSelection = "rOCK";
// const computerSelection = getComputerChoice();
// console.log(playRound(playerSelection, computerSelection));
