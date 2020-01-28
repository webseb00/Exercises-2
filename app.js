
// let min = 1,
//     max = 10,
//     winningNum = getWinningNum(min, max),
//     guessLeft = 3;

// const game = document.querySelector('#game'),
//       minNum = document.querySelector('.min-num'),
//       maxNum = document.querySelector('.max-num'),
//       guessBtn =  document.querySelector('#guess-value'),
//       guessInput = document.querySelector('#guess-input'),
//       message = document.querySelector('.message');

// minNum.textContent = min;
// maxNum.textContent = max;

// game.addEventListener('mousedown', (e) => {
//     if(e.target.className === 'play-again') {
//         location.reload();
//     }
// });

// guessBtn.addEventListener('click', () => {
//     let guess = parseInt(guessInput.value);

//     console.log(winningNum);

//     if(isNaN(guess) || guess < min || guess > max) {
//         setMessage(`Please, enter a number between ${min} and ${max}`, 'red');
//     }

//     if(guess === winningNum) {
//         gameOver(true, `${winningNum} is correct, YOU WON!`);
//     } else {
//         guessLeft -= 1;

//         if(guessLeft === 0) {
//             gameOver(false, `Game over. You lost, the correct number was ${winningNum}`);
//         } else {
//             guessInput.style.borderColor = 'red';

//             guessInput.value = '';

//             setMessage( `${guess} is not correct! ${guessLeft} guesses left!`, 'red');
//         }
//     }

// });

// function gameOver(won, msg) {
//     let color;
//     won === true ? color = 'green' : color = 'red';
//     guessInput.disabled = true;
//     guessInput.style.borderColor = color;
//     setMessage(msg, color);

//     guessBtn.value = 'Play Again';
//     guessBtn.classList.add('play-again');
// };

// function getWinningNum(min, max) {
//     return Math.floor(Math.random() * 10 + 1);
// };

// function setMessage(msg, color) {
//     message.style.color = color;
//     message.textContent = msg;
// };








// MY SOLUTION

const guess_input = document.querySelector('#guess-input'),
      submit_btn = document.querySelector('#guess-value'),
      message = document.querySelector('.message'),
      gameWrapper = document.querySelector('#game');

let min = 1,
    max = 10,
    randomNum = getRandomNum(),
    guessLeft = 3;

gameWrapper.addEventListener('mousedown', (e) => {
    if(e.target.className === 'play-again') {
        location.reload();
    }
});

submit_btn.addEventListener('click', () => {
    drawNum();
});

console.log(randomNum);

function drawNum() {
    const playerRandomNum = parseInt(guess_input.value);
    guess_input.value = '';

    if(isNaN(playerRandomNum) || min > playerRandomNum || max < playerRandomNum) {
        addMessage(`Please enter a correct number between ${min} and ${max}!`, 'red');
    }

    if(randomNum === playerRandomNum) {
        checkResult(`You won the game! The correct number was ${randomNum}.`, true);
    } else {
        addMessage(`Wrong number! Your number is ${playerRandomNum}.`, 'red');
        guessLeft = guessLeft - 1;

        if(guessLeft === 0) {
            checkResult(`You lost the game! The correct number is ${randomNum}.`, false);
        } else {
            addMessage(`Wrong number! Only ${guessLeft} guesses left.`, 'red');
        }
    }
};

function checkResult(msg, result) {
    let color;
    result === true ? color = 'green' : color = 'red';
    addMessage(msg, color);
    guess_input.style.borderColor = color;
    guess_input.disabled = true;
    submit_btn.classList.add('play-again');
    submit_btn.value = 'Play again';
};

function getRandomNum() {
    return Math.floor(Math.random() * max + min);
};

function addMessage(msg, color) {
    message.textContent = msg;
    message.style.color = color;
};