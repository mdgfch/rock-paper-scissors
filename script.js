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
}


function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
}


function playRound(playerSelection, computerSelection) {
    computerPlay();
    switch (true) {
        case (playerSelection.toUpperCase() === computerSelection.toUpperCase()):
            return `You tied! You both picked ${computerSelection}!`;
        case (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS") ||
        (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK") ||
        (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER"):
            yourScore++;
            return `You win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}!`;
        case (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER") ||
        (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") ||
        (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK"):
            computerScore++;
            return `You lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}!`;
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

document.getElementById('rockbtn').addEventListener('click', function(){console.log(playRound('rock', computerSelection))});
document.getElementById('paperbtn').addEventListener('click', function(){console.log(playRound('paper', computerSelection))});
document.getElementById('scissorsbtn').addEventListener('click', function(){console.log(playRound('scissors', computerSelection))});






