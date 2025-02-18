'use strict';

//Selecting both score dom elements
const score0Ele = document.querySelector('#score--0');
const score1Ele = document.getElementById('score--1');
const current0Ele = document.getElementById('current--0');
const current1Ele = document.getElementById('current--1');
//more speed when i comes to accessing Id
const diceEle = document.querySelector('.dice');
const btnRoll = document.querySelector('.btn--roll');
const btnNew = document.querySelector('.btn--new');
const btnHold = document.querySelector('.btn--hold');
//Starting condition
score0Ele.textContent = 0;
score1Ele.textContent = 0;
diceEle.classList.add('hidden');

let currentScore = 0;
//Dice Roll Logic while click button

btnRoll.addEventListener('click', function () {
  //   console.log('Button Roll Clicked');
  //   1. generate a random roll
  const randomRoll = Math.trunc(Math.random() * 6) + 1;
  console.log(randomRoll);

  //   2 Display the dice
  diceEle.classList.remove('hidden');
  diceEle.src = `dice-${randomRoll}.png`;

  //   3 add the current roll number the current scrore

  if (randomRoll != 1) {
    currentScore += randomRoll;
    current0Ele.textContent = currentScore;
  } else {
    //check the rolled =1, then switch the player
  }
});
