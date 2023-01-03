function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let computerSelection = choices[randomIndex];
    return computerSelection;
};

function playRound(playerSelection, computerSelection) {
    let message = "";
    let rawPlayerSelection = prompt("Please enter Rock, Paper or Scissors:");
    playerSelection = rawPlayerSelection.toLowerCase();
    computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        message = "It's a tie!";
        console.log(message);
        return [playerSelection, message];
     } else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock"){
        message = `You Lose! ${computerSelection} beats ${playerSelection}`;
        console.log(message);
        return [playerSelection, message];
     } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
        message = `You Win! ${playerSelection} beats ${computerSelection}`;
        console.log(message);
        return [playerSelection, message];
     } else {
        message = "Please enter one of the 3 choices...Bozo!";
        console.log(message);
        return [playerSelection, message];
     }
};

function game() {
    let playerScore = 0;
    let computerScore = 0;
    let playerSelection = "";
    let computerSelection = "";

    for (let i = 0; i < 5; i++) {
        resultMessage = playRound(playerSelection, computerSelection)[1];

        if (resultMessage.substr(0, 7) === "You Win") {
            playerScore += 1;
            console.log(`Player Score: ${playerScore}   Computer Score: ${computerScore}`);
        } else if (resultMessage.substr(0, 8) === "You Lose") {
            computerScore += 1;
            console.log(`Player Score: ${playerScore}   Computer Score: ${computerScore}`);
        } else {
            i -= 1;
            console.log(`Player Score: ${playerScore}   Computer Score: ${computerScore}`); 
        }
    };

    if (playerScore > computerScore) {
        console.log("You beat a computer!");
    } else console.log("You lost rock, paper, scissors to a computer...");
};

game();