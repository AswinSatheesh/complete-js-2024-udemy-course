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
// const calcTip = value => value >= 50 && value <= 300 ? value * 0.5 : value * 0.2; //(arrow function means automatically returns value)
// console.log(calcTip(300));

// objects 

// const myBio = {
//     firstName: "Aswin",
//     secondName: "Satheesh",
//     age: 2025 - 2001,
//     friends: ["Ambu", "Achu", "Allu"],
//     job: "Developer"
// };

// console.log(myBio);

// console.log(myBio.age);
// console.log(myBio['age']);

// const nameKey = 'Name';
// console.log(myBio['first' + nameKey]);

// const resultFromUser = prompt(`What information you wanted to know about Aswin
//         1.firstName
//         2.secondName
//         3.age
//         4.friends
//         5.job`)

// console.log(resultFromUser);
// console.log(myBio[resultFromUser]);

// if (myBio[resultFromUser]) {
//     console.log(myBio[resultFromUser]);
// } else {
//     console.log("Wrong Request, Choose from the above given options!!");

// }


// myBio.hobby = 'FootBall';
// myBio['food'] = 'Biriyani';
// console.log(myBio);

// //challenges
// //"Jonas has 3 friends,and his best friend is called Michael"

// const result = `${myBio.firstName} has ${myBio.friends.length} friends, and his best friend is called ${myBio.friends[0]}`
// console.log(result);

// object methods


// const aswinDetails = {
//     firstName: "Aswin",
//     lastName: "Satheesh",
//     birthYear: 2001,
//     friends: ['Kannan', 'Achu', 'Ambu'],
//     hasLicense: false,
//     job: 'Developer',
//     // calcAge: function () {
//     //     return 2025 - this.birthYear;
//     // }

//     calcAge: function () {
//         this.age = 2025 - this.birthYear;
//         return this.age;
//     },

//     getSummary: function () {
//         return `${this.firstName} is a ${this.age}-year old ${this.job}, and he has ${this.hasLicense ? 'a' : 'not'} drivers license`;
//     }
// }

// console.log(aswinDetails['calcAge'](2001));
// console.log(aswinDetails.calcAge());
// console.log(aswinDetails.age);
// console.log(aswinDetails.age);


//challenge - getSummary
// "Jonas is a 46-year old teacher, and he has
// a driver's license"

// "Aswin is a 24-year old Developer, and he has
// a driver's license"

// console.log(aswinDetails.calcAge());
// console.log(aswinDetails.getSummary());

//challenge

/* Write your code below. Good luck! 🙂 */
// const mark = {
//     fullName: 'Mark Miller',
//     mass: 78,
//     height: 1.69,
//     calcBMI: function () {
//         const bmi = (this.mass / (this.height * this.height));
//         return bmi;
//     }
// }

// const john = {
//     fullName: 'John Smith',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         const bmi = (this.mass / (this.height * this.height));
//         return bmi;
//     }
// }

// if (john.calcBMI() > mark.calcBMI()) {
//     console.log(`${john.fullName}'s BMI (${john.calcBMI()}) is higher than ${mark.fullName}'s (${mark.calcBMI()})`);
// } else {
//     console.log(`${mark.fullName}'s BMI (${mark.calcBMI()}) is higher than ${john.fullName}'s (${john.calcBMI()})`);
// }


// for (let rep = 1; rep <= 10; rep++) {
//     console.log(`Gym repetition set ${rep}`);
// }

// const myArray = ["Aswin", "Developer", 23, ['ambu', 'achu', 'kannan'], true];
// // console.log(myArray);
// const typesArray = [];
// for (let i = 0; i <= myArray.length - 1; i++) {
//     console.log(myArray[i], typeof myArray[i]);
//     // typesArray[i] = typeof myArray[i]; //Method 1
//     typesArray.push(typeof myArray[i]); //method 2
//     // typesArray.unshift(typeof myArray[i]); //reverse order
// }

// console.log(typesArray);


// const years = [2001, 1990, 2007];
// const age = [];

// for (let i = 0; i < years.length; i++) {
//     // if (years[i] != 1990) continue;
//     // if (years[i] === 2007) break;
//     age.push(2025 - years[i]);
// }

// console.log(age);


// const myArray = ["Aswin", "Developer", 23, ['ambu', 'achu', 'kannan']];

// console.log(myArray);

// const reversArrya = [];
// for (let i = myArray.length - 1; i >= 0; i--) {
//     console.log(myArray[i]);
//     // reversArrya[]
// }

// for (let i = 0; i < 3; i++) {
//     console.log(`Starting Excercise ${i} 💪`);
//     for (let rep = 1; rep <= 3; rep++) {
//         console.log(`Repetitive Task ${rep}`);
//     }
// }

// let dice = Math.trunc(Math.random() * 6 + 1);
// // console.log(dice);

// while (dice !== 6) {
//     console.log(`You rolled ${dice}`);
//     dice = Math.trunc(Math.random() * 6 + 1);

//     if (dice === 6) {
//         console.log('Loop is about to end!!');
//     }
// }

// new challenge 

const calcTip = function (bill) {
    return bill >= 50 && bill <= 300 ? bill * 0.15 : bill * 0.2;
}
/* Write your code below. Good luck! 🙂 */

const bills = [22, 295, 176, 440, 37, 105, 10, 110, 86, 52];
const tips = [];
const totals = [];

for (let i = 0; i <= bills.length - 1; i++) {
    // tips[i] = calcTip(bills[i]);
    // totals[i] = bills[i] + tips[i];
    const tip = calcTip(bills[i]);
    tips.push(tip);
    totals.push(tip + bills[i]);
}

console.log(bills);
console.log(tips);
console.log(totals);

const calcAverage = function (arr) {
    let sum = 0;
    for (let i = 0; i <= arr.length - 1; i++) {
        sum = sum + arr[i];
    }
    const avg = sum / arr.length;
    return avg;
}

console.log(calcAverage(totals));