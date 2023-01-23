//RPS === Rock, Paper, Scissors 

//Selects all the buttons on the page which pertain to RPS choices and adds a 'click' event listener
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

//Disables the RPS selection buttons
function disableButtons() {
    buttons.forEach((button) => button.disabled = true);
};

//Enables the RPS selection buttons
function enableButtons() {
    buttons.forEach((button) => button.disabled = false);
};

//Uses Math.random to get a random choice from the choices array to be used as the computer selection
function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    let randomIndex = Math.floor(Math.random() * choices.length);
    let computerSelection = choices[randomIndex];
    return computerSelection;
};

//This function creates the reset button which is populated when a player reaches a score of 5
function createResetButton() {
    let resetButton = document.createElement("button");
    resetButton.textContent = "Reset";
    document.body.appendChild(resetButton);
    resetButton.onclick = function(){
        let playerOneScore = 0;
        let playerTwoScore = 0;
        document.querySelector('#playerOneScore').textContent = playerOneScore;
        document.querySelector('#playerTwoScore').textContent = playerTwoScore;
        enableButtons();
        document.body.removeChild(resetButton);
    }
};

//This function is called when a RPS button is selected, the button.id and the return value from getComputerChoice are used to play
function playRound(playerSelection, computerSelection) {
    //Parses the document to grab both player scores which have a correlating ID in the HTML file
    let playerOneScore = Number(document.querySelector('#playerOneScore').textContent);
    let playerTwoScore = Number(document.querySelector('#playerTwoScore').textContent);
    let roundMessage = document.querySelector('#roundMessage');
    let message = "";
    computerSelection = getComputerChoice();

    //The user choice (button.id) and computerSelection are equivalent this runs
    if (playerSelection === computerSelection) {
        message = "It's a tie!";
        roundMessage.textContent = message;
        return [playerSelection, message];
    
    //The computerSelection beats the user choice (button.id), then this runs
    } else if (playerSelection === "rock" && computerSelection === "paper" || playerSelection === "paper" && computerSelection === "scissors" || playerSelection === "scissors" && computerSelection === "rock"){
        message = `You Lose! ${computerSelection} beats ${playerSelection}`;
        let score = playerTwoScore += 1;
        if (score < 5) {
            document.querySelector('#playerTwoScore').textContent = score;
            roundMessage.textContent = message;
            } else {
                document.querySelector('#playerTwoScore').textContent = score;
                roundMessage.textContent = "You lost to a Computer!";
                disableButtons();
                createResetButton();
            }
        return [playerSelection, message];
    
    //The user choice (button.id) beats the computerSelection, then this runs
    } else if (playerSelection === "rock" && computerSelection === "scissors" || playerSelection === "paper" && computerSelection === "rock" || playerSelection === "scissors" && computerSelection === "paper"){
        message = `You Win! ${playerSelection} beats ${computerSelection}`;
        let score = playerOneScore += 1;
        if (score < 5) {
        document.querySelector('#playerOneScore').textContent = score;
        roundMessage.textContent = message;
        } else {
            document.querySelector('#playerOneScore').textContent = score;
            roundMessage.textContent = "You beat a Computer!";
            disableButtons();
            createResetButton();
        }
        return [playerSelection, message];
     }
};