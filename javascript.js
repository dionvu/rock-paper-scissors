const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

// Scores
let scorePlayerUi = document.getElementById("playerCounter");
let scoreComputerUi = document.getElementById("computerCounter");
let outcomeUi = document.querySelector(".foot");

// Buttons
let rockButton = document.getElementById("rock");
let scissorsButton = document.getElementById("scissors");
let paperButton = document.getElementById("paper");

// Choices and scores
let computerChoice = "";
let playerChoice = "";

let scorePlayer = 0;
let scoreComputer = 0;

let outcome;

computerChoice = getComputerChoice();

// Listners
rockButton.addEventListener("click", () => {
    playerChoice = ROCK;
    playRound();
});
paperButton.addEventListener("click", () => {
    playerChoice = PAPER;
    playRound();
});
scissorsButton.addEventListener("click", () => {
    playerChoice = SCISSORS;
    playRound();
});

function playRound() {
    outcome = getOutcome(playerChoice, computerChoice);
    console.log(outcome);

    if (outcome == "You win!") {
        scorePlayer++;
        updateScoreUi();
        checkWin();
    }
    else if (outcome == "Computer win!") {
        scoreComputer++;
        updateScoreUi();
        checkWin();
    }
    else updateScoreUi();

    computerChoice = getComputerChoice();
}
// functions

function getOutcome() {
    // Ties if computer choice and player choice equal each other
    if (playerChoice == computerChoice) return "It's a tie!";

    // Compares choice of player with computer 
    if (
        (playerChoice == ROCK && computerChoice == SCISSORS) ||
        (playerChoice == PAPER && computerChoice == ROCK) ||
        (playerChoice == SCISSORS && computerChoice == PAPER)
    ) return "You win!";
    else return "Computer win!";
}

function checkWin() {
    let str;
    if (scorePlayer >= 3) {
        str = "Player win!";
    }

    if (scoreComputer >= 3) {
        str = "Computer win!";
    }

    outcomeUi.textContent = str;
}

function updateScoreUi() {
    scorePlayerUi.textContent = scorePlayer;
    scoreComputerUi.textContent = scoreComputer;
}

function getComputerChoice() {
    // choice is a number between 0 to 3
    let choice = Math.random() * 3;

    if (choice <= 1) return ROCK;
    if (choice <= 2) return PAPER;
    return SCISSORS;
}
