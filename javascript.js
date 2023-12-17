game();

function getComputerChoice() {
    let choice = Math.random() * 3;

    if(choice <= 1) return "rock";
    if(choice <= 2) return "paper";
    if(choice <= 3) return "scissors";
}

function playRound(playerSelection, computerSelection) {
    if(playerSelection == computerSelection) return "It's a tie!";
    
    if(playerSelection == "rock" && computerSelection == "scissors") return "You win!"; 
    else if(playerSelection == "paper" && computerSelection == "rock") return "You win!";
    else if(playerSlection == "scissors" && computerSelection == "paper") return "You win!";
    else return "Computer win!";
}

function game() {
    let computerChoice;
    let scoreComputer;

    let playerChoice;
    let scorePlayer;

    let outcome;

    for(let i = 0; i < 5; i++) {
        computerChoice = getComputerChoice();
        playerChoice = prompt(playerChoice);
        
        playerChoice = playerChoice.toLowerCase();

        console.log(playRound(playerChoice, computerChoice));
    }

}