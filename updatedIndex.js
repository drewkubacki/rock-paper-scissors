const buttons = document.querySelectorAll('button');
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        if (button.id === "rock") {
            playRound(button.id, getComputerChoice);
        } else if (button.id === "paper") {
            playRound(button.id, getComputerChoice);
        } else if (button.id === "scissors") {
            playRound(button.id, getComputerChoice);
        }
    });
});

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let computerSelection = choices[randomIndex];
    return computerSelection;
};

function playRound(playerSelection, computerSelection) {
    let playerOneScore = Number(document.querySelector('#playerOneScore').textContent);
    let playerTwoScore = Number(document.querySelector('#playerTwoScore').textContent);
    let message = "";
    computerSelection = getComputerChoice();

    if (playerSelection === computerSelection) {
        message = "It's a tie!";
        console.log(message);
        return [playerSelection, message];

     } else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock"){
        message = `You Lose! ${computerSelection} beats ${playerSelection}`;
        console.log(message);
        let score = playerTwoScore += 1;
        document.querySelector('#playerTwoScore').textContent = score;
        return [playerSelection, message];

     } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
        message = `You Win! ${playerSelection} beats ${computerSelection}`;
        console.log(message);
        let score = playerOneScore += 1;
        document.querySelector('#playerOneScore').textContent = score;
        return [playerSelection, message];

     } else {
        message = "Please enter one of the 3 choices...Bozo!";
        console.log(message);
        return [playerSelection, message];
     }
};