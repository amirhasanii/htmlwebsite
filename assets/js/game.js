function computerPlay() {
    const selection = ['rock', 'paper', 'scissors'];
    let computer = selection[Math.floor(Math.random() * selection.length)];
    return computer
}

let round = parseInt(1),
    winRock = "You win - Rock beats Scissors",
    winPaper = "You win - Paper beats Rock",
    winScissors = "You win - Scissors beats Paper",
    loseRock = "You lose - Rock beats Scissors",
    losePaper = "You lose - Paper beats Rock",
    loseScissors = "You lose - Scissors beats Paper",
    tie = "It\'s a tie"

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        round++
        if (computerSelection === "paper") {
            computerScore++;
            return losePaper;
        } else if (computerSelection === "rock") {
            return tie;
        } else {
            playerScore++;
            return winRock;
        }
    }

    if (playerSelection.toLowerCase() === "scissors") {
        round++
        if (computerSelection === "paper") {
            playerScore++;
            return winScissors;
        } else if (computerSelection === "rock") {
            computerScore++;
            return loseRock;
        } else {
            return tie;
        }
    }

    if (playerSelection.toLowerCase() === "paper") {
        round++
        if (computerSelection === "paper") {
            return tie;
        } else if (computerSelection === "rock") {
            playerScore++;
            return winPaper;
        } else {
            computerScore++;
            return loseScissors;
        }
    }
}
function playerOptions() {
    let playerInput = prompt(`ROCK ,PAPER AND SCISSORS GAME\nEnter your choice:  Rock, Paper or Scissors\nRound ${round} \nIf you want to restart the game enter YES`)
    if (playerInput) playerInput = playerInput.toLocaleLowerCase().trim()
    if (!(playerInput == 'rock' || playerInput == 'paper' || playerInput == 'scissors' || playerInput == 'yes')) {
        alert("Please enter a valid selection!")
        return playerOptions()
    } else if (playerInput === 'yes') {
        const restartGame = 'Are you sure to RESTART the game?\nPres OK for restar or CANCEL to continue';
        if (confirm(restartGame) === true) {
            return location.reload()
        } else {
            return playerOptions()
        }
    }
    else {
        return playerInput
    }
}
let playerScore = parseInt(0);
let computerScore = parseInt(0);
function game() {

    for (let i = 0; i < 5; i++) {
        const singleRoundResult = playRound(playerOptions(), computerPlay())
        console.log(`*********** Round ${i + 1} *********** \n${singleRoundResult}\nPlayer ${playerScore} - Computer ${computerScore}`);
        if (i === 4) {
            if (playerScore > computerScore) {
                console.log(`=======>>  GAME OVER <<========\n\nCongratulations you are the winner Player ${playerScore} - ${computerScore} Computer `);
                alert(`Congratulations you are the winner\nPlayer ${playerScore} - ${computerScore} Computer\nDo you want to play again press F5`)
            } else if (playerScore < computerScore) {
                console.log(`=======>>  GAME OVER <<========\n\nYou lose the game Player ${playerScore} - ${computerScore} Computer `);
                alert(`You lose\nPlayer ${playerScore} - ${computerScore} Computer\nDo you want to play again press F5`)
            } else {
                console.log(`=======>> GAME OVER <<=======\n\nIt\'s a tie  Player ${playerScore} - ${computerScore} Computer`);
                alert(`It\'s a tie \nPlayer ${playerScore} - ${computerScore} Computer\nDo you want to play again press F5`)
            }
        }
    }

}
game();

