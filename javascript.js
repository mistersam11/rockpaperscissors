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
        console.log('Tie. On to the next round.')
    } else if (humanChoice === 'rock' && computerChoice === 'paper') {
        console.log('You lose! Paper beats rock!');
        ++computerScore;
    } else if (humanChoice === 'paper' && computerChoice === 'scissors') {
        console.log('You lose! Scissors beats paper!');
        ++computerScore;
    } else if (humanChoice === 'scissors' && computerChoice === 'rock') {
        console.log('You lose! Rock beats scissors!');
        ++computerScore;
    } else if (humanChoice === 'rock' && computerChoice === 'scissors') {
        console.log('You win! Rock beats scissors');
        ++playerScore;
    } else if (humanChoice === 'paper' && computerChoice === 'rock') {
        console.log('You win! Paper beats rock!')
        ++playerScore;
    } else if (humanChoice === 'scissors' && computerChoice === 'paper') {
        console.log('You win! Scissors beats paper');
        ++playerScore;
    } else {
        console.log('You put something strange...');
        return;
    }
}



function playGame() {
        
    for (let i = 0; i <= 4; ++i) {
        const humanSelection = getHumanChoice();
        const computerSelection = getComputerChoice();


        console.log('Player choice: ' + humanSelection);
        console.log('Computer choice: ' + computerSelection);

        playRound(humanSelection, computerSelection)

        console.log('Player score: ' + playerScore);
        console.log('Computer score: ' + computerScore);
        // Last one to separate rounds in log
        console.log('');
    }
}

playGame();
