let computerSelection = ""
let yourScore = 0
let computerScore = 0

function computerPlay() {
    let num = Math.floor(Math.random()*3);
    if (num == 0) {
        computerSelection = "Rock";
    } else if (num == 1) {
        computerSelection = "Paper";
    } else {
        computerSelection = "Scissors";
    }
    return computerSelection;
}


function playRound(playerSelection, computerSelection) {
    switch (true) {
        case (playerSelection.toUpperCase() === computerSelection.toUpperCase()):
            return `You tied! You both picked ${computerSelection}!`;
        case (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS"):
            yourScore++;
            return "You win! Rock beats Scissors!";
        case (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER"):
            computerScore++;
            return "You lose! Paper beats Rock!";
        case (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK"):
            yourScore++;
            return "You win! Paper beats Rock!";
        case (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS"):
            computerScore++;
            return "You lose! Scissors beats Paper!";
        case (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK"):
            computerScore++;
            return "You lose! Rock beats Scissors!";
        case (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER"):
            yourScore++;
            return "You win! Scissors beats Paper!";
    }
}


function game() {
    for (let i = 0; i < 5; i++) {
        computerPlay();
        let playerSelection = prompt("Choose Rock, Paper, or Scissors.");
        console.log(playRound(playerSelection, computerSelection));
        let score = `SCORE: ${yourScore}:${computerScore}`;
        console.log(score);
    }
    if (yourScore < computerScore) {
        console.log("You lost!")
    } else if (yourScore > computerScore) {
        console.log("You won!")
    } else {
        console.log("You tied!")
    }
}
game();