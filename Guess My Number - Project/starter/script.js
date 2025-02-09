'use strict';

console.log(document.querySelector('.message').textContent);

// console.log(document.querySelector('.between').textContent);
document.querySelector('.message').textContent = '🎉Correct Number...';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 10;
document.querySelector('.score').textContent = 15;

console.log(document.querySelector('.guess').value);
document.querySelector('.guess').value = 10;
