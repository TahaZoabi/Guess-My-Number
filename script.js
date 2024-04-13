'use strict';

let secretNumber = Math.floor(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;

const displayMessage = function (message) {
    document.querySelector('.message').textContent = message;
}

const changeNumberWidth = function (width) {
    document.querySelector('.number').style.width = width;
}

const changeBackgroundColor = function (color) {
    document.querySelector("body").style.backgroundColor = color
}

const changeNumberText = function (number) {
    document.querySelector('.number').textContent = number
}

const changeScore = function (score) {
    document.querySelector('.score').textContent = score;
}

document.querySelector('.check').addEventListener('click', function () {
    const guess = Number(document.querySelector('.guess').value);
    // when there is no input
    if (!guess) {
        displayMessage('No Number!');
        // when player wins
    } else if (guess === secretNumber) {
        displayMessage('Correct Number!')
        changeBackgroundColor('#60b347');
        changeNumberWidth('30rem');
        changeNumberText(secretNumber);

        if (score > highScore) {
            highScore = score;
            document.querySelector('.highscore').textContent = highScore;
        }

        //when guess is wrong
    } else if (guess !== secretNumber) {
        if (score > 1) {
            displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
            score--;
            changeScore(score);
        } else {
            displayMessage('You lost the game!');
            changeScore(0);
        }
    }

})
// Again button reset
document.querySelector('.again').addEventListener('click', function () {
    secretNumber = Math.floor(Math.random() * 20) + 1;
    score = 20;
    displayMessage('Start guessing...');
    changeScore(score);
    changeBackgroundColor('#222');
    changeNumberWidth('15rem');
    changeNumberText('?');
    document.querySelector('.guess').value = '';

})