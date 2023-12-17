game();

function getComputerChoice() {
    let choice = Math.random() * 3;

    if(choice <= 1) return "rock";
    if(choice <= 2) return "paper";
    if(choice <= 3) return "scissors";
}

function playRound(playerSelection, computerSelection) {

}

function game() {
    let scorePlayer = 0;
    let scoreComputer = 0;

    let computerChoice = "";
    let playerChoice = "";

    for(let i = 0; i < 5; i++) {
        console.log(getComputerChoice());
    }
}