'use strict';

const btnsShowModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

console.log(btnsShowModal);
console.log(modal);
console.log(btnClose);
console.log(overlay);

for (let i = 0; i < btnsShowModal.length; i++)
  console.log(btnsShowModal[i].textContent);
