const ROCK = "rock";
const PAPER = "paper";
const SCISSORS = "scissors";

game();

function getComputerChoice() {
    // choice is a number between 0 to 3
    let choice = Math.random() * 3;

    if(choice <= 1) return ROCK;
    if(choice <= 2) return PAPER;
    return SCISSORS;
}

function playRound(playerSelection, computerSelection) {
    // Ties if computer choice and player choice equal each other
    if(playerSelection == computerSelection) return "It's a tie!";
    
    // Compares choice of player with computer 
    if(
        (playerSelection == ROCK && computerSelection == SCISSORS) || 
        (playerSelection == PAPER && computerSelection == ROCK) || 
        (playerSelection == SCISSORS && computerSelection == PAPER) 
    ) return "You win!";
    else return "Computer win!";
}

function game() {
    let computerChoice = "";
    let playerChoice = "";

    let scorePlayer = 0;
    let scoreComputer = 0;
    
    // final total
    let outcome;
    
    // Round
    for(let i = 0; i < 5; i++) {
        computerChoice = getComputerChoice();
        playerChoice = prompt(playerChoice);
        
        playerChoice = playerChoice.toLowerCase();

        outcome = playRound(playerChoice, computerChoice);
        console.log(outcome);
        
        checkRound(outcome);
    }
    //Final score
    checkTotal(scorePlayer, scoreComputer); 
}

// Returns 0 if tie, 1 if player win, 2 if computer win
function checkRound(outcome) {
    if(outcome == "You win!") return 0;
    if(outcome == "Computer win!") return 1;
    else return 2; 
}

function checkTotal(scorePlayer, scoreComputer) {
    if(scorePlayer == scoreComputer) console.log("Game ends in a tie! Player Score: " 
        + scorePlayer + " Computer Score: " + scoreComputer);
    else if(scorePlayer > scoreComputer) console.log("Game ends in player win!. Player Score: " 
        + scorePlayer + " Computer Score: " + scoreComputer);
    else console.log("Game ends in player win!. Player Score: " 
        + scorePlayer + " Computer Score: " + scoreComputer);
}
