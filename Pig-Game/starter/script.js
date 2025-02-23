'use strict';

//Game deployed in the NetlifyApp link is providing below :
// https://spiffy-pasca-5f0f7d.netlify.app/

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

let scores, currentScore, activePlayer, playing;
let init = function () {
  //Starting condition

  scores = [0, 0];
  currentScore = 0;
  activePlayer = 0;
  playing = true;

  score0Ele.textContent = 0;
  score1Ele.textContent = 0;
  current0Ele.textContent = 0;
  current1Ele.textContent = 0;

  diceEle.classList.add('hidden');
  playerEl0.classList.remove('player--winner');
  playerEl1.classList.remove('player--winner');
  playerEl0.classList.add('player--active');
  playerEl1.classList.remove('player--active');
};

init();

const switchPlayer = function () {
  if (playing) {
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
};

//Dice Roll Logic while click button

btnRoll.addEventListener('click', function () {
  if (playing) {
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
      switchPlayer();
    }
  }
});

//Holding the current score logic need to implement
btnHold.addEventListener('click', function () {
  if (playing) {
    // 1.Add Current score to the activePlayer's score
    scores[activePlayer] += currentScore;
    document.getElementById(`score--${activePlayer}`).textContent =
      scores[activePlayer];
    //2. check if player's score>=100
    if (scores[activePlayer] >= 20) {
      playing = false;
      diceEle.classList.add('hidden');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${activePlayer}`)
        .classList.remove('player--active');
      //Finish the game
    } else {
      //switch the player
      switchPlayer();
    }
  }
});

//New Game Reset Logic

// btnNew.addEventListener('click', function () {
//   // console.log('Reset Functionality');

//   diceEle.classList.add('hidden');
//   currentScore = 0;
//   // document.getElementById(`score--${activePlayer}`).textContent = currentScore;
//   document
//     .querySelector(`.player--${activePlayer}`)
//     .classList.remove('player--winner');
//   document
//     .querySelector(`.player--${activePlayer}`)
//     .classList.add('player--active');

//   document.getElementById(`current--${activePlayer}`).textContent = 0;
//   currentScore = 0;

//   scores = [0, 0];
//   activePlayer = 0;
//   playing = true;
// });

btnNew.addEventListener('click', init);
