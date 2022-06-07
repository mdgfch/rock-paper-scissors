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

function checkScore () {
    if (yourScore === 5) {
        yourScore = 0;
        computerScore = 0;
        results.textContent = ('Congrats! You Won!');
    } else if (computerScore === 5) {
        yourScore = 0;
        computerScore = 0;
        results.textContent = ('Womp. You lost.');
    } else return;
}


function playRound(playerSelection, computerSelection) {
    computerPlay();
    switch (true) {
        case (playerSelection.toUpperCase() === computerSelection.toUpperCase()):
            results.textContent = `You tied! You both picked ${computerSelection}!`;
            break;
        case (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "SCISSORS") ||
        (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "ROCK") ||
        (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "PAPER"):
            yourScore++;
            results.textContent = `You win! ${capitalizeFirstLetter(playerSelection)} beats ${capitalizeFirstLetter(computerSelection)}!`;
            break;
        case (playerSelection.toUpperCase() === "ROCK" && computerSelection.toUpperCase() === "PAPER") ||
        (playerSelection.toUpperCase() === "PAPER" && computerSelection.toUpperCase() === "SCISSORS") ||
        (playerSelection.toUpperCase() === "SCISSORS" && computerSelection.toUpperCase() === "ROCK"):
            computerScore++;
            results.textContent = `You lose! ${capitalizeFirstLetter(computerSelection)} beats ${capitalizeFirstLetter(playerSelection)}!`;
            break;
    } checkScore();
}


document.getElementById('rockbtn').addEventListener('click', function(){
    (playRound('rock', computerSelection));
    score.textContent = (`SCORE: ${yourScore}:${computerScore}`);
});
document.getElementById('paperbtn').addEventListener('click', function(){
  (playRound('paper', computerSelection));
    score.textContent = (`SCORE: ${yourScore}:${computerScore}`);
});
document.getElementById('scissorsbtn').addEventListener('click', function(){
    (playRound('scissors', computerSelection));
    score.textContent = (`SCORE: ${yourScore}:${computerScore}`);
});

const results = document.querySelector('.results');
const score = document.querySelector('.score');








