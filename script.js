'use strict';

// console.log(document.querySelector('.message').textContent);
// document.querySelector('.message').textContent = 'Correct Number 😎';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 10;

// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);

let secretNumber = Math.trunc(Math.random()*20)+1;
let score = 5; //# of guesses
let highscore = 0;

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message;
}

document.querySelector('.check').addEventListener('click', function() {
    const guess = Number( document.querySelector('.guess').value);
    console.log(guess, typeof guess);

    if (!guess) {
        displayMessage('No Number 😕');
        // document.querySelector('.message').textContent = 'No Number 😕';  
        
    } else if (guess === secretNumber) { // correct guess
        displayMessage('Correct Number 😎');
        // document.querySelector('.message').textContent = 'Correct Number 😎';
        document.querySelector('.number').textContent = secretNumber;
        document.querySelector('body').style.backgroundColor = "#60b347";
        document.querySelector('.number').style.width = '30rem';
        document.querySelector('.title').textContent = 'Congrats! You Win!!';

        if (score > highscore) { 
            highscore = score;
            document.querySelector('.highscore').textContent = highscore;
        }
        
    } else if (guess !== secretNumber) { //guess is wrong
        
        if(score > 1) {
            displayMessage(guess > secretNumber ? 'Too High 🤯' : 'Too Low 🤔');
            // document.querySelector('.message').textContent = guess > secretNumber ? 'Too High 🤯' : 'Too Low 🤔'; 
            score--;
            document.querySelector('.score').textContent = score;
        } else {
            displayMessage('Game Over try again 😫');
            // document.querySelector('.message').textContent = 'Game Over try again 😫';
            document.querySelector('.score').textContent = 0;
            document.querySelector('body').style.backgroundColor = "#BB2020";
            document.querySelector('.title').textContent = 'You Lost! Try Again';
        }
    }   

    // } refactored code above ^^
    // too high
    // } else if (guess > secretNumber) {
    //     // too low
    // } else if (guess < secretNumber) {
    //     if(score > 1) {
    //         document.querySelector('.message').textContent = 'Too Low 🤔'; 
    //         score--;
    //         document.querySelector('.score').textContent = score;
    //     } else {
    //         document.querySelector('.message').textContent = 'Game Over try again 😫';
    //         document.querySelector('.score').textContent = 0;
    //     }

document.querySelector('.again').addEventListener('click', function() {  // again button restarts game but keeps highscore
    score = 5; // Guesses left
    secretNumber = Math.trunc(Math.random()*20)+1; // reset #
    displayMessage('Start Guessing...');
    // document.querySelector('.message').textContent = 'Start Guessing...'; 
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').textContent = '?';
    document.querySelector('.guess').value = '';
    document.querySelector('body').style.backgroundColor = "#222";
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.title').textContent = 'Guess My Number!';
    })
});
