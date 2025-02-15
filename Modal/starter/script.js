'use strict';

const btnsShowModal = document.querySelectorAll('.show-modal');
const modal = document.querySelector('.modal');
const btnClose = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');

//common functions
const closeModal = function () {
  //   debugger;
  modal.classList.add('hidden');
  overlay.classList.add('hidden');
};

const openModal = function () {
  console.log('button Clicked');
  modal.classList.remove('hidden');
  overlay.classList.remove('hidden');
};

for (let i = 0; i < btnsShowModal.length; i++) {
  //   console.log(btnsShowModal[i].textContent);
  btnsShowModal[i].addEventListener('click', openModal);
}

// btnClose.addEventListener('click', function () {
//   closeModal();
// });

// overlay.addEventListener('click', function () {
//   closeModal();
// });

btnClose.addEventListener('click', closeModal); //if you call it like -> btnClose.addEventListener('click', closeModal()); it will not work bcz do not call the funciton , only give function name

overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', function (event) {
  //   console.log('A key Pressed');
  //   console.log(event.key);
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    closeModal(); //call the function
  }
});
