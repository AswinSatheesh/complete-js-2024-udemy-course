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
const myName = 'Aswin';

if (myName === 'Aswin') {
  console.log(`job is ${job}`); //TDZ
  const exp = 5; //TDZ
  const job = 'Engineer';
  console.log(job);
}
