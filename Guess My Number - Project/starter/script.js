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

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;

document.querySelector('.score').textContent = score;

document.querySelector('.check').addEventListener('click', function () {
  const inputNumber = Number(document.querySelector('.guess').value);
  console.log(inputNumber, typeof inputNumber);
  if (!inputNumber) {
    document.querySelector('.message').textContent = '⛔ No Number!';
  } else if (inputNumber === secretNumber) {
    if (score > 1) {
      document.querySelector('.number').textContent = secretNumber;
      document.querySelector('.message').textContent = '🎉Correct Number';
      document.querySelector('body').style.backgroundColor = '#60b347';
      document.querySelector('.number').style.width = '30rem';
    }
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

//implement the game reset functionality(Again!)

document.querySelector('.again').addEventListener('click', function () {
  console.log('Button clicked!!');
  // location.reload();  //Solution 1 Page Reload and all values clear

  //Solution 2 - select each field and set back to initial value
  score = 20;
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  // document.querySelector('.number').placeholder = '?';
  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;

  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
