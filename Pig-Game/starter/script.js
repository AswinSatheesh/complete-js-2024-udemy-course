'use strict';

//Selecting both score dom elements
const playerEl0 = document.querySelector('.player--0');
const playerEl1 = document.querySelector('.player--1');
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

const scores = [0, 0];
let currentScore = 0;
let activePlayer = 0;
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
    // current0Ele.textContent = currentScore; //This one always sets the first element scroe //dynamic value set
    document.getElementById(`current--${activePlayer}`).textContent =
      currentScore;
  } else {
    //check the rolled =1, then switch the player
    document.getElementById(`current--${activePlayer}`).textContent = 0;
    currentScore = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    // if (activePlayer === 0) {
    //   playerEl0.classList.add('player--active');
    //   playerEl1.classList.remove('player--active');
    // } else {
    //   playerEl0.classList.remove('player--active');
    //   playerEl1.classList.add('player--active');
    // } //instead of this if condition we can use toggle consept in classList

    playerEl0.classList.toggle('player--active');
    playerEl1.classList.toggle('player--active');
  }

  //Holding the current score logic need to implement
  const player0HoldtScore = document.getElementById('score--0');
  const player1HoldtScore = document.getElementById('score--1');
  console.log(player0HoldtScore.textContent);
  console.log(player1HoldtScore.textContent);
});
