let computerSelection = getComputerChoice();
console.log(computerSelection);
let rawPlayerSelection = prompt("Please enter Rock, Paper or Scissors:");
let playerSelection = rawPlayerSelection.toLowerCase();
console.log(playerSelection);

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let computerSelection = choices[randomIndex];
    return computerSelection;
};

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
     } else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock"){
        return `You Lose! ${computerSelection} beats ${playerSelection}`;
     } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
        return `You Win! ${playerSelection} beats ${computerSelection}`;
     } else return "Please enter one of the 3 choices...Bozo!";
};

function game() {
    let playerScore = 0;
    let computerScore = 0;

    for (let i = 0; i < 5; i++) {
        result = playRound(playerSelection, computerSelection);
        if (result.substr(0, 7) === "You Win") {
            playerScore += 1;
            console.log(`Player Score: ${playerScore}   Computer Score: ${computerScore}`);
            return;
        } else if (result.substr(0, 7) === "You Lose") {
            computerScore += 1;
            console.log(`Player Score: ${playerScore}   Computer Score: ${computerScore}`);
            return;
        } else {
            console.log(`Player Score: ${playerScore}   Computer Score: ${computerScore}`);
            return;
        }
    };
};

game();