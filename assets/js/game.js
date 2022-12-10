const plScore = document.getElementById("playerScore");
const pcScore = document.getElementById("computerScore");
const plSelection = document.getElementById("playerSelection");
const pcSelection = document.getElementById("computerSelection");
const rockBtn = document.getElementById("rock");
const paperBtn = document.getElementById("paper");
const scissorsBtn = document.getElementById("scissors");
const rounds = document.getElementById("round");
const draws = document.getElementById("draw");
const winner = document.getElementById("winner");
const player = document.getElementById("player");
const computer = document.getElementById("computer");


const playAgain = document.getElementById("restart-game");
let playerScore = 0;
let computerScore = 0;

plScore.textContent = 0;
pcScore.textContent = 0;
let drawRounds = 0;
let round = parseInt(1);

function computerPlay() {
    const selection = ['rock', 'paper', 'scissors'];
    let computer = selection[Math.floor(Math.random() * selection.length)];
    return computer
}

function main() {
    rockBtn.addEventListener('click', () => roundPlay("rock", computerPlay()));
    paperBtn.addEventListener('click', () => roundPlay("paper", computerPlay()));
    scissorsBtn.addEventListener('click', () => roundPlay("scissors", computerPlay()));
}
main()

function roundPlay(playerSelection) {
    const computerSelection = computerPlay();
    plScore.innerText = playerScore;
    pcScore.innerText = computerScore;
    console.log(`Round ${round}\n Selection: PL ${playerSelection} - ${computerSelection} PC \n Scorer: PL ${playerScore} - ${computerScore} PC`);

    plSelection.innerText = playerSelection;
    pcSelection.innerText = computerSelection;
    draws.innerText = drawRounds;
    rounds.innerText = round;

    if (playerSelection === computerSelection) {
        draw(playerSelection, computerSelection);
    } else if (playerSelection === 'rock' && computerSelection === 'scissors') {
        win(playerSelection, computerSelection);
    } else if (playerSelection === 'paper' && computerSelection === 'rock') {
        win(playerSelection, computerSelection);
    } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
        win(playerSelection, computerSelection);
    } else {
        lose(playerSelection, computerSelection);
    }
}

function win(playerSelection, computerSelection) {
    playerScore++;
    round++;
    plScore.innerText = playerScore;
    pcScore.innerText = computerScore;

    if (playerScore < 5) {
        winner.innerText = `${playerSelection} beats ${computerSelection}\n You win`;
    } else if (playerScore === 5) {
        winner.innerText = `Game over\n You win!`;
        playAgain.style.display = 'block';
        rockBtn.style.display = 'none';
        paperBtn.style.display = 'none';
        scissorsBtn.style.display = 'none';
        player.style.color = 'green';
        plScore.style.color = 'green'
        winner.style.color = 'green'
    };
}

function lose(playerSelection, computerSelection) {
    computerScore++;
    round++;
    plScore.innerText = playerScore;
    pcScore.innerText = computerScore;

    if (computerScore < 5) {
        winner.innerText = `${computerSelection} beats ${playerSelection}\n You lose `;
    } else if (computerScore === 5) {
        winner.innerText = `Game over \n you lose!`;
        playAgain.style.display = 'block';
        rockBtn.style.display = 'none';
        paperBtn.style.display = 'none';
        scissorsBtn.style.display = 'none';
        computer.style.color = 'green';
        pcScore.style.color = "green"
        player.style.color = "red"
        plScore.style.color = 'red'
        winner.style.color = 'red'
    };

}

function draw() {
    round++;
    drawRounds++;
    plScore.innerText = playerScore;
    pcScore.innerText = computerScore;
    winner.innerText = `It\'s a tie!`;
}

function endGame() {
    location.reload()
}