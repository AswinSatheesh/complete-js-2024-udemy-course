'use strict';

// function calcAge(birthYear) {
//   const age = 2025 - birthYear;
//   console.log(firstName);
//   function printAge() {
//     const output = `Your are ${age} old and born in ${birthYear}`;
//     console.log(output);
//   }
//   printAge();
//   return age;
// }

// const firstName = 'Aswin';
// calcAge(2001);

// Temporal Dead Zone
// const myName = 'Aswin';

// if (myName === 'Aswin') {
//   // console.log(`job is ${job}`); //TDZ
//   const exp = 5; //TDZ
//   const job = 'Engineer';
//   console.log(job);
// }

// console.log(a);
// a = 10;
// console.log(a);

// let a;

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Aswin';
// let job = 'Programmer';
// const year = 2025;

//Functions

console.log(addTwo(5, 4));
// console.log(TwoAdd(5, 5));
// console.log(TwoAdd); //var TwoAdd itself is a undefined
console.log(arr(5, 1));

function addTwo(a, b) {
  return a + b;
}

var TwoAdd = function (a, b) {
  //variable declared using var is hoisting and value will we undefined now we are trying to call function with undefined. //undefined(5,5)
  return a + b;
};

const arr = (a, b) => {
  return a + b;
};
