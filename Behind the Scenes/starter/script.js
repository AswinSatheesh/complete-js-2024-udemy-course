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

// console.log(addTwo(5, 4));
// // console.log(TwoAdd(5, 5));
// // console.log(TwoAdd); //var TwoAdd itself is a undefined
// console.log(arr(5, 1));

// function addTwo(a, b) {
//   return a + b;
// }

// var TwoAdd = function (a, b) {
//   //variable declared using var is hoisting and value will we undefined now we are trying to call function with undefined. //undefined(5,5)
//   return a + b;
// };

// const arr = (a, b) => {
//   return a + b;
// };

// 03/17/2025
// console.log(this);

// const calcAge = function (year) {
//   //regural function
//   console.log(2025 - year);
//   console.log(this); //this will be undefined - if its not in strict mode then window object will log (global)
// };

// // calcAge(2001);

// const calcAgeArrow = year => {
//   console.log(2025 - year);
//   console.log(this); //this will be a window object,uses lexical this keyword
// };

// // calcAgeArrow(2001);

// const aswin = {
//   name: 'Aswin',
//   age: 23,
//   calcAge: function () {
//     console.log(this);
//     console.log(50 - this.age);
//   },
// };

// // aswin.calcAge();

// const kannanobj = {
//   age: '25',
// };

// // console.log(kannanobj);

// kannanobj.calcAge = aswin.calcAge; //calcAge function is assigning to kannanobj object's calcAge key(creating and assigning )

// kannanobj.calcAge();

// regular functions vs arrow functions

// var name = 'Kannan';
const aswin = {
  name: 'Aswin',
  age: 23,
  calcAge: function () {
    console.log(this);
    console.log(50 - this.age);
  },

  greet: () => console.log(`Hey this is ${this.name}`),
};

// aswin.greet();
// console.log(this.name);

// sollution 1
// const aswinReg = {
//   name: 'Aswin',
//   age: 23,
//   calcAge: function () {
//     // console.log(this);
//     // console.log(50 - this.age);

//     const self = this;
//     const isMillenal = function () {
//       console.log(self);

//       console.log(self.age >= 25);
//     };
//     isMillenal();
//   },

//   greet: function () {
//     console.log(`Hey this is ${this.name}`);
//   },
// };

// aswinReg.calcAge();
// // console.log(this.name);

// Sollution 2
const aswinReg = {
  name: 'Aswin',
  age: 23,
  calcAge: function () {
    const isMillenal = () => {
      console.log(this);

      console.log(this.age >= 25);
    };
    isMillenal();
  },

  greet: function () {
    console.log(`Hey this is ${this.name}`);
  },
};

// aswinReg.calcAge();
// console.log(this.name);

//arguments keyword

// const addExpr = function (a, b) {
//   console.log(arguments);

//   return a + b;
// };

// addExpr(5, 5);
// addExpr(10, 12, 28, 20);

// var addArrow = (a, b) => a + b;

//Object reference - shallow vs deep copies

// const Aswin = {
//   firstName: 'Aswin',
//   lastName: 'Satheesh',
//   age: 23,
// };

// // const D/ DevAswin.age = 24;evAswin = Aswin;
// /

// function RoleUpdation(NameObj, age) {
//   NameObj.age = age;
//   return NameObj;
// }

// const DevAswin = RoleUpdation(Aswin, 24);

// console.log('Before', Aswin.age); //both object age changed to 24
// console.log('Before', DevAswin.age); //both object age changed to 24

const Aswin = {
  firstName: 'Aswin',
  lastName: 'Satheesh',
  age: 23,
  gang: ['member1', 'member2'],
  abc: {
    id: 123,
  },
};

//Shallow copy
// const UpdatedProfile = { ...Aswin }; //Using seperator creating a copy of old object with and storing it in the heap.
// UpdatedProfile.age = 25;
// UpdatedProfile.abc.id = 23;
// UpdatedProfile.gang.push('member3'); //updating only in reference array but updating in both array
// UpdatedProfile.gang.push('member4'); //updating only in reference array but updating in both array

// const UpdatedProfile = structuredClone(Aswin);  //vedha solution

//Deep Copy/Clone

// const UpdatedProfile = structuredClone(Aswin);
// UpdatedProfile.gang.push('member3');
// UpdatedProfile.gang.push('member4');
// UpdatedProfile.gang.push('member5');
// console.log(Aswin, UpdatedProfile);

const newobj = JSON.parse(JSON.stringify(Aswin)); //Deep copy
console.log(newobj);
const newDeepcopy = structuredClone(Aswin);
console.log(newDeepcopy);
