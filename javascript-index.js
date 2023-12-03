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

    if ((player ==="Rock" && computer === "Paper") || (player === "Scissors" && computer === "Rock") || (player === "Paper" && computer === "Scissors")) {
        return ("You Lose! " + computer + " beats " + player);
    } else if ((player === "Paper" && computer === "Rock") || (player === "Rock" && computer === "Scissors") || (player === "Scissors" && computer === "Paper")) {
        return ("You Win! " + player + " beats " + computer);
    } else if (player === computer) {
        return "It's a tie!";
    } else {
        return "Wrong selection, play again!";
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    while (playerScore < 3 && computerScore < 3) {
        let playerSelection = prompt("Choose your hand!", "Rock? Paper? Scissors?");
        let computerSelection = getComputerChoice();

        let round = playRound(playerSelection, computerSelection);
    
        if (round.includes("You Win")) {
            playerScore += 1;
        } else if (round.includes("You Lose")) {
            computerScore += 1;
        }

        console.log(round);
        console.log("Player score: " + playerScore);
        console.log("Computer score: " + computerScore);  
    }

    if (playerScore === computerScore) {
        console.log("The Match Is A Tie!")
    } else if (playerScore < computerScore) {
        console.log("You Lose The Match!");
    } else {
        console.log("You Win The Match!");
    }

}

game();

