function computerPlay() {
    const selection = ['rock', 'paper', 'scissors'];
    let computer = selection[Math.floor(Math.random() * selection.length)];
    return computer
}

let round = parseInt(1),
    win = "You win",
    lose = "You lose",
    tie = "It is a tie";
function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === "rock") {
        round++
        if (computerSelection === "paper") {
            playerScore++;
            return lose;
        } else if (computerSelection === "rock") {
            return tie;
        } else {
            playerScore++;
            return win;
        }
    }

    if (playerSelection.toLowerCase() === "scissors") {
        round++
        if (computerSelection === "paper") {
            playerScore++;
            return win;
        } else if (computerSelection === "rock") {
            computerScore++;
            return lose;
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
            return win;
        } else {
            computerScore++;
            return lose;
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
        console.log(playRound(playerSelection, computerSelection));
        // console.log('Player pt:' + playerScore + ' Computer pt: ' + computerScore);

        if (i === 4) {
            if (playerScore > computerScore) {
                console.log('==>> GAME OVER <<==');
                console.log('Congratulations you are the winner ' + ' Player ' + playerScore + ' - ' + ' Computer ' + computerScore);
            } else if (playerScore < computerScore) {
                console.log('==>> GAME OVER <<==');
                console.log('Sorry you lose the game ' + ' Player ' + playerScore + ' - ' + ' Computer ' + computerScore);
            } else {
                console.log('==>> GAME OVER <<==');
                console.log('It is a tie ' + ' Player ' + playerScore + ' - ' + ' Computer ' + computerScore);
            }
        }

    }
}
game();
