// rockPaperScissors.js


const playerMove = process.argv[2];

const moves = ['rock', 'paper', 'scissors'];

function getComputerMove() {
    const randomIndex = Math.floor(Math.random() * moves.length);
    return moves[randomIndex];
}

function determineWinner(playerMove, computerMove) {
    if (playerMove === computerMove) {
        return 'draw';
    }
    if (
        (playerMove === 'rock' && computerMove === 'scissors') ||
        (playerMove === 'scissors' && computerMove === 'paper') ||
        (playerMove === 'paper' && computerMove === 'rock')
    ) {
        return 'won';
    } else {
        return 'lost';
    }
}

if (!playerMove || !moves.includes(playerMove)) {
    console.log(`Invalid move! Please choose one of the following: ${moves.join(', ')}`);
    process.exit(1);
}

const computerMove = getComputerMove();

const result = determineWinner(playerMove, computerMove);

const resultEmoji = {
    won: '🎉 You won! 🎉',
    lost: '😞 You lost! 😞',
    draw: '😐 It\'s a draw! 😐'
}

console.log(`You chose ${playerMove}. Computer chose ${computerMove}. ${resultEmoji[result]}`);
