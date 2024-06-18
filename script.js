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

function getHumanChoice() {
    let humanChoice = prompt("Rock, Paper or Scissors?");

    switch (humanChoice.toLowerCase()) {
        case "rock":
            return "Rock";
        case "paper":
            return "Paper";
        case "scissors":
            return "Scissors";
    }
    return getHumanChoice();
}

function playGame() {
    let humanScore = 0;
    let computerScore = 0;

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
    
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    
    playRound(humanSelection, computerSelection);

    for (let i = 0; i < 5; i++) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();
    
        const roundResult = playRound(humanSelection, computerSelection);
        console.log(roundResult);
    }

    if (humanScore > computerScore) {
        console.log("You Win! Congratulations!");
    }
    else if (humanScore < computerScore) {
        console.log("You Lose! Better luck next time.");
    }
    else console.log("It's a tie!");
}