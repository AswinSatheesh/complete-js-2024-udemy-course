'use strict';

//Selecting both score dom elements
const score0Ele = document.querySelector('#score--0');
const score1Ele = document.getElementById('score--1'); //more speed when i comes to accessing Id
const diceEle = document.querySelector('.dice');
//Starting condition
score0Ele.textContent = 0;
score1Ele.textContent = 0;
diceEle.classList.add('hidden');
