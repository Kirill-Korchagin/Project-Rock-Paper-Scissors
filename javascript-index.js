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
    } else if (player === computer) {
        return "It's a tie!";
    } else {
        return "Wrong selection, play again!";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    let playerSelection = prompt("Choose your hand!", "Rock? Paper? Scissors?");
    let computerSelection = getComputerChoice();

    let round1 = playRound(playerSelection, computerSelection);
    
    if (round1.includes("You Win")) {
        playerScore += 1;
    } else if (round1.includes("You Lose")) {
        computerScore += 1;
    }

    console.log(round1);
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);

    playerSelection = prompt("Choose your hand!", "Rock? Paper? Scissors?");
    computerSelection = getComputerChoice();

    let round2 = playRound(playerSelection, computerSelection);
    
    if (round2.includes("You Win")) {
        playerScore += 1;
    } else if (round2.includes("You Lose")) {
        computerScore += 1;
    }

    console.log(round2);
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);

    playerSelection = prompt("Choose your hand!", "Rock? Paper? Scissors?");
    computerSelection = getComputerChoice();

    let round3 = playRound(playerSelection, computerSelection);
    
    if (round3.includes("You Win")) {
        playerScore += 1;
    } else if (round3.includes("You Lose")) {
        computerScore += 1;
    }

    console.log(round3);
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);

    playerSelection = prompt("Choose your hand!", "Rock? Paper? Scissors?");
    computerSelection = getComputerChoice();

    let round4 = playRound(playerSelection, computerSelection);
    
    if (round4.includes("You Win")) {
        playerScore += 1;
    } else if (round4.includes("You Lose")) {
        computerScore += 1;
    }

    console.log(round4);
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);

    playerSelection = prompt("Choose your hand!", "Rock? Paper? Scissors?");
    computerSelection = getComputerChoice();

    let round5 = playRound(playerSelection, computerSelection);
    
    if (round5.includes("You Win")) {
        playerScore += 1;
    } else if (round5.includes("You Lose")) {
        computerScore += 1;
    }

    console.log(round5);
    console.log("Player score: " + playerScore);
    console.log("Computer score: " + computerScore);

    if (playerScore === computerScore) {
        console.log("The Match Is A Tie!")
    } else if (playerScore < computerScore) {
        console.log("You Lose The Match!");
    } else {
        console.log("You Win The Match!");
    }

}

game();

