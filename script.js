let humanScore = 0;
let computerScore = 0;

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function getComputerChoice() {
    let choice = getRandomInt(3);

    switch (choice) {
        case 0:
            return "Rock";
        case 1:
            return "Paper";
        case 2:
            return "Scissors";
    }
}

console.log(getComputerChoice());

function getHumanChoice() {
    let input = prompt("Rock, Paper or Scissors?");

    switch (input.toLowerCase()) {
        case "rock":
            return "Rock";
        case "paper":
            return "Paper";
        case "scissors":
            return "Scissors";
    }
}

console.log(getHumanChoice());

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        return "Tie!";
    }
    else if (humanChoice === "Rock") {
        if (computerChoice === "Scissors") {
            humanScore++;
            return "You Win! Rock beats Scissors.";
        }
        else {
            computerScore++;
            return "You Lose! Paper beats Rock.";
        }
    }
    else if (humanChoice === "Paper") {
        if (computerChoice === "Rock") {
            humanScore++;
            return "You Win! Paper beats Rock.";
        }
        else {
            computerScore++;
            return "You Lose! Scissors beats Paper.";
        }
    }
    else if (humanChoice === "Scissors") {
        if (computerChoice === "Paper") {
            humanScore++;
            return "You Win! Scissors beats Paper.";
        }
        else {
            computerScore++;
            return "You Lose! Rock beats Scissors.";
        }
    }
    else return "Invalid choice. Please try again!";
}

console.log(playRound());

const humanSelection = getHumanChoice();
const computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection);