// Get User input
const getUserChoice = userSelection => {
    //userSelection = userSelection.toLowerCase();

    if (userSelection = 'rock' || 'paper' || 'scissors') {
        return userSelection;
    }
    else {
        console.log("Invalid Input");
    }
}

// Get Computer input
const getComputerChoice = () => {
    switch(Math.floor(Math.random() * 3)) {
        case 0:
            return 'rock';
            break;
        case 1:
            return 'paper';
            break;
        case 2:
            return 'scissors';
            break;
    }
    
}

// Function to play one round
function playRound(userChoice, computerSelection)  {

    if (userChoice === computerSelection) {
        return 'It"s a tie';
    }
    
    if (userChoice === 'rock') {
        if (computerSelection === 'scissors') {
            return 'You Won';
        }
        else {
            return 'The Computer Won';
        }
    }

    if (userChoice === 'paper') {
        if (computerSelection === 'rock') {
            return 'You Won';
        }
        else {
            return 'The Computer Won';
        }
    }

    if (userChoice === 'scissors') {
        if (computerSelection === 'paper') {
            return 'You Won';
        }
        else {
            return 'The Computer Won';
        }
    }

}

//Function to Play game

let i = 0 

for (i = 0; i < 5; i++) {
function playGame() {

const userChoice = getUserChoice();
const computerSelection = getComputerChoice();
console.log(playRound(userChoice, computerSelection));
console.log('You chose: ' + userChoice);
console.log('The Computer Chose: ' + computerSelection);
    
}
}
playGame();
