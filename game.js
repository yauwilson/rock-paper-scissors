function computerPlay() {
    let play = ['rock','paper','scissors']
    const randomIndex = Math.floor(Math.random() * play.length);

    return play[randomIndex]
}

let scores = {
    'user': 0,
    'computer': 0,
}

function playRound(playerSelection) {
    let playerSelect = playerSelection.toLowerCase();
    let computerSelection = computerPlay();
    let playObj = {
        'rock': 'paper',
        'paper': 'scissors',
        'scissors': 'rock'
    };
    let winner = '';
    // alert(`player: ${playerSelection} and computer: ${computerSelection}`);

    if (computerSelection === playerSelect) {
        // alert('tie');
    } else if (computerSelection === playObj[playerSelect]) {
        // console.log(`You Lose! ${computerSelection} beats ${playerSelect}`);
        // alert('computer')
        scores['computer'] += 1;
        if (scores['computer'] === 5) {
            winner = 'Computer';
        };
    } else {
        // console.log(`You Win! ${playerSelect} beats ${computerSelection}`);
        // alert('user')
        scores['user'] += 1;
        if (scores['user'] === 5) {
            winner = 'User';
        };
    };

    if (winner) {
        alert(`${winner} wins!`);
        scores = {
            'user': 0,
            'computer': 0,
        };
    };

    document.querySelector('#result').textContent = `User: ${scores['user']} Computer: ${scores['computer']}`;

};

const buttons = document.querySelectorAll('button');

buttons.forEach((button) => {
    button.addEventListener('click', () => playRound(button.id));
});