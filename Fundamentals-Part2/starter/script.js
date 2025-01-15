'use strict'

// let ableToAttendInv = false;
// const passInv = true;

// if (passInv) ableToAttendInv = true;
// if (ableToAttendInv) console.log("Interview Cleared!!");

// let private = 'Aswin'; reserved word
// let interface = 5; reserved word
// let if = true;

// function fruitProcessor(apples, oranges) {
//     console.log(apples, oranges);
//     const juice = `Juice with ${apples} Apples and ${oranges} Oranges`;
//     return juice;
// }


// const processor1 = fruitProcessor(5, 0)
// console.log(processor1);
// const processor2 = fruitProcessor(2, 4);
// console.log(processor2);


// const age = function (birthYear) {
//     const currentAge = 2025 - birthYear;
//     return currentAge;
// }

// const myage = age(2001);
// console.log(myage);

// Anonymous function & Function Expression 

// const returedValue = function (val) {
//     const colorPick = 100 - val;
//     return colorPick;
// }

// const myval = returedValue(10);
// console.log(myval);


//Arrow Function

// const arrVal = birthYear => 2025 - birthYear;

// const age1 = arrVal(2001);
// console.log(age1);

// const retirementUntilAge = birthYear => {
//     const age = 2025 - birthYear;
//     const retirement = 60 - age;
//     return retirement;
// }

// const yearsLeft = retirementUntilAge(2001);
// console.log(yearsLeft);

// Multiple Parameters 

// const retirementUntilAge = (birthYear, name) => {
//     const age = 2025 - birthYear;
//     const retirement = 60 - age;
//     // return retirement;
//     return `${name} retires in ${retirement} years`
// }

// const yearsLeftAsw = retirementUntilAge(2001, 'Aswin');
// const yearsLeftAmbu = retirementUntilAge(2003, 'Ambu');
// console.log(yearsLeftAsw);
// console.log(yearsLeftAmbu);

//function calling another function

// function cutPieces(fruit) {
//     return fruit * 4;
// }

// function fruitProcessor(apples, oranges) {
//     const appliePieces = cutPieces(apples);
//     const orangePieces = cutPieces(oranges);
//     const juice = `Juice with ${appliePieces} piece of Apple and ${orangePieces} piece of Oranges`;
//     return juice;
// }

// console.log(fruitProcessor(5, 6));

// Arrays

// const friends = ['name1', 'name2'];
// console.log(friends);

// const year = new Array(2022, 2023, 2024, 2025);
// console.log(year);


// const age = function (birthYear) {
//     const currentAge = 2025 - birthYear;
//     return currentAge;
// }

// const years = [2001, 2005, 1998];

// const newResArrya = [age(years[0]), age(years[1]), age(years[years.length - 1])];
// console.log(newResArrya);

// array built in methods and functions :

// const friends = ['Aswin', 'Kannan', 'Ambu'];
// console.log(friends);
// const newLength = friends.push("Achu");
// console.log(friends);
// console.log(newLength);

// const popedElement = friends.pop();
// console.log(friends);
// console.log(popedElement);

// friends.unshift("Luna");//add's at the beginning of the array
// console.log(friends);

// friends.shift()//remove from the beginning
// console.log(friends);


// console.log(friends.indexOf('Kannan'));

// console.log(friends.includes('Kannan'));

// console.log(friends.includes('kichu'));

// const newwords = friends.map(res => res.toLowerCase()); // will learn in the future // while map section learn
// if (newwords.includes('aswin')) {
//     console.log("Name present");
// } else {
//     console.log("Not present");

// }



/* Write your code below. Good luck! 🙂 */
// //coding challenge solution without using loop - just hardcoded need to optimise and dynamically work(todo***)
// const calcTip = (value) => {
//     if (value >= 50 && value <= 300) {
//         return (15 * value) / 100;
//     } else {
//         return (20 * value) / 100;
//     }
// }

// const bills = [125, 555, 44];
// const tips = [calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2])];
// const totals = [bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]];
// console.log(totals);

// efficent way using arrow function and ternary operator 
const calcTip = value => value >= 50 && value <= 300 ? value * 0.5 : value * 0.2; //(arrow function means automatically returns value)
console.log(calcTip(300));