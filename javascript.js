game();

function getComputerChoice() {
    // choice is a number between 0 to 3
    let choice = Math.random() * 3;

    if(choice <= 1) return "rock";
    if(choice <= 2) return "paper";
    if(choice <= 3) return "scissors";
}

function playRound(playerSelection, computerSelection) {
    // Ties if computer choice and player choice equal each other
    if(playerSelection == computerSelection) return "It's a tie!";
    
    // Compares choice of player with computer 
    if(playerSelection == "rock" && computerSelection == "scissors") return "You win!"; 
    else if(playerSelection == "paper" && computerSelection == "rock") return "You win!";
    else if(playerSelection == "scissors" && computerSelection == "paper") return "You win!";
    else return "Computer win!";
}

function game() {
    let computerChoice = "";
    let scoreComputer = "";

    let playerChoice = 0;
    let scorePlayer = 0;

    let outcome;

    // Loops 5 times and increments the score of player and computer when they win a round.
    for(let i = 0; i < 5; i++) {
        computerChoice = getComputerChoice();
        playerChoice = prompt(playerChoice);
        
        playerChoice = playerChoice.toLowerCase();

        outcome = playRound(playerChoice, computerChoice);
        console.log(outcome);

        if(outcome == "You win!") scorePlayer++;
        if(outcome == "Computer win!") scoreComputer++;
    }
    checkOutcome(scorePlayer, scoreComputer); 
}

function checkOutcome(scorePlayer, scoreComputer) {
    if(scorePlayer == scoreComputer) console.log("Game ends in a tie! Player Score: " 
        + scorePlayer + " Computer Score: " + scoreComputer);
    else if(scorePlayer > scoreComputer) console.log("Game ends in player win!. Player Score: " 
        + scorePlayer + " Computer Score: " + scoreComputer);
    else console.log("Game ends in player win!. Player Score: " 
        + scorePlayer + " Computer Score: " + scoreComputer);
}
