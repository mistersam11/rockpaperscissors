function getComputerChoice() {
    let random = Math.random() * 10;
    
    if (random < 3.33) {
        return 'rock';
    } else if (random < 6.66) {
        return 'paper';
    } else {
        return 'scissors';
    }

}

function getHumanChoice() {
    let choice = prompt('Enter "Rock", "Paper", or "Scissors"', '');
    choice = choice.toLowerCase();
    return choice;
}

let playerScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        dialogue.textContent = 'Tie. On to the next round.'
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        dialogue.textContent = 'You lose! Paper beats rock!'
        ++computerScore;
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        dialogue.textContent = 'You lose! Scissors beats paper!'
        ++computerScore;
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        dialogue.textContent = 'You lose! Rock beats scissors!'
        ++computerScore;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        dialogue.textContent = 'You win! Scissors beats rock!'
        ++playerScore;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        dialogue.textContent = 'You win! Rock beats paper!'
        ++playerScore;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        dialogue.textContent = 'You win! Paper beats scissors!'
        ++playerScore;
    } else {
        dialogue.textContent = 'Not sure what happened there...';
        console.log('Bad selection during playRound');
        return;
    }
    player.textContent = `Player\r\n${playerScore}`;
    computer.textContent = `Computer\r\n${computerScore}`;

    gameOver(playerScore, computerScore);
}

const choices = document.querySelector('#choices');
choices.addEventListener('click', (e) => {
    const target = e.target;

    switch(target.id) {
        case 'rock':
            playRound('rock', getComputerChoice());
            break;
        case 'paper':
            playRound('paper', getComputerChoice());
            break;
        case 'scissors':
            playRound('scissors', getComputerChoice());
            break;
        default:
            console.log('Selection was unexpected...');
            break;
    }
});

const player = document.querySelector('#player');
const computer = document.querySelector('#computer');
player.setAttribute('style', 'white-space: pre;')
computer.setAttribute('style', 'white-space: pre;')

const results = document.querySelector('#results');

const dialogue = document.createElement('p');
dialogue.setAttribute('style', 'color: black; font-size: 16px;');
results.appendChild(dialogue);

function gameOver(playerScore, computerScore) {
    if (playerScore < 5 && computerScore < 5) {
        return;
    } else if (playerScore < computerScore) {
        dialogue.textContent = 'YOU LOSE!'
        choices.remove();
    } else if (playerScore === computerScore) {
        dialogue.textContent = "Are you really going to keep playing even though it's over?"
    } else {
        dialogue.textContent = 'YOU WIN!'
        choices.remove();
    }
}