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
    tie = "It is a tie"
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

let playerScore = parseInt(0);
let computerScore = parseInt(0);
function game() {
    for (let i = 0; i < 5; i++) {
        let playerSelection = prompt("Pick a move " + ' Round nr ' + round)
        const computerSelection = computerPlay();
        console.log('Round Nr: ' + round);
        console.log('Player selected >> ' + playerSelection + ' << Computer selected >> ' + computerSelection + ' <<');
        console.log(playRound(playerSelection, computerSelection) + '');
        console.log('Scores ' + ' Player ' + playerScore + ' - ' + computerScore + ' Computer ');

        if (i === 4) {
            if (playerScore > computerScore) {
                console.log('==>> GAME OVER <<==');
                console.log('Congratulations you are the winner ' + ' Player ' + playerScore + ' - ' + computerScore + ' Computer ');
            } else if (playerScore < computerScore) {
                console.log('==>> GAME OVER <<==');
                console.log('Sorry you lose the game ' + ' Player ' + playerScore + ' - ' + computerScore + ' Computer ');
            } else {
                console.log('==>> GAME OVER <<==');
                console.log('It is a tie ' + ' Player ' + playerScore + ' - ' + computerScore + ' Computer ');
            }
        }

    }
}
game();
