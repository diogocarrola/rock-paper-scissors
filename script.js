function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let computerChoice = getRandomInt(3);

    switch (computerChoice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection) {
    const computerSelection = getComputerChoice(); // Get computer's choice
    let resultMessage = '';

    // Determine the winner
    if (playerSelection === computerSelection) {
        resultMessage = "It's a tie!";
    } else if (
        (playerSelection === "Rock" && computerSelection === "Scissors") ||
        (playerSelection === "Paper" && computerSelection === "Rock") ||
        (playerSelection === "Scissors" && computerSelection === "Paper")
    ) {
        playerScore++;
        resultMessage = `You Win! ${playerSelection} beats ${computerSelection}.`;
    } else {
        computerScore++;
        resultMessage = `You Lose! ${computerSelection} beats ${playerSelection}.`;
    }

    // Update the result and score in the DOM
    document.getElementById('results').innerText = resultMessage;
    updateScore();
}

// Add event listeners to buttons
document.getElementById('rockButton').addEventListener('click', () => playRound('Rock'));
document.getElementById('paperButton').addEventListener('click', () => playRound('Paper'));
document.getElementById('scissorsButton').addEventListener('click', () => playRound('Scissors'));

function updateScore() {
    const scoreDisplay = `Player: ${playerScore} - Computer: ${computerScore}`;
    document.getElementById('score').innerText = scoreDisplay;

    // Check for a winner
    if (playerScore === 5) {
        alert("Congratulations! You are the champion!");
        resetGame();
    } else if (computerScore === 5) {
        alert("The computer wins! Better luck next time.");
        resetGame();
    }
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    updateScore(); // Reset the score display
}