function computerPlay() {
    let play = ['rock','paper','scissors']
    const randomIndex = Math.floor(Math.random() * play.length);

    return play[randomIndex]
}

function playRound(playerSelection, computerSelection) {
    let playerSelect = playerSelection.toLowerCase();
    let playObj = {
        'rock': 'paper',
        'paper': 'scissors',
        'scissors': 'rock'
    };
    if (computerSelection === playerSelect) {
        return 'tie';
    } else if (computerSelection === playObj[playerSelect]) {
        // console.log(`You Lose! ${computerSelection} beats ${playerSelect}`);
        return 'computer'
    } else {
        // console.log(`You Win! ${playerSelect} beats ${computerSelection}`);
        return 'user'
    }
}

function game() {
    let scores = {
        'user': 0,
        'computer': 0,
        'tie': 0,
    }
    for (let i = 0; i < 5; i++) {
        const playerSelection = computerPlay();
        const computerSelection = computerPlay();
        winner = playRound(playerSelection, computerSelection);
        scores[winner] += 1
    }
    console.log(scores);
    if (scores['user'] == scores['computer']) {
        console.log('Tie!')
    }
    else if (scores['user'] > scores['computer']) {
        console.log('User wins!')
    } else {
        console.log('Computer wins!')
    }
}

game()