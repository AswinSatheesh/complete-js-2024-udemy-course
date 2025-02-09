'use strict';

/* console.log(document.querySelector('.message').textContent);

// console.log(document.querySelector('.between').textContent);
document.querySelector('.message').textContent = '🎉Correct Number...';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 10;
document.querySelector('.score').textContent = 15;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 10;
*/

//Game Logic build

const secretNumber = Math.trunc(Math.random() * 20) + 1;
document.querySelector('.number').textContent = secretNumber;

let score = 20;

document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function () {
  const inputNumber = Number(document.querySelector('.guess').value);
  console.log(inputNumber, typeof inputNumber);
  if (!inputNumber) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  } else if (inputNumber === secretNumber) {
    document.querySelector('.message').textContent = '🎉Correct Number';
  } else if (inputNumber < secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📉Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🥸You Lost the Game!';
      score--;
    }
  } else if (inputNumber > secretNumber) {
    if (score > 1) {
      document.querySelector('.message').textContent = '📈Too High';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '🥸You Lost the Game!';
      score--;
    }
  }
});
