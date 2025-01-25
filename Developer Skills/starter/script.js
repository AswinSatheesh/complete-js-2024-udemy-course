// Remember, we're gonna use strict mode in all scripts now!
'use strict';

// console.log(`Npm live server installed use command 'live-server'`);

// const maxTempCalculate = function (temperature) {
//   let max = temperature[0];
//   let min = temperature[0];
//   for (let i = 0; i < temperature.length; i++) {
//     if (typeof temperature[i] !== 'number') {
//       continue;
//     }
//     // console.log(typeof temperature[i]);
//     if (max < temperature[i]) {
//       max = temperature[i];
//     }
//     if (min > temperature[i]) {
//       min = temperature[i];
//     }
//   }
//   //   console.log(max);
//   //   console.log(min);
//   return max - min;
// };

// // console.log(maxTempCalculate([4, 1, 'error', 10.91, 10.9]));

// //same functionality with inputs as 2 arrays

// const maxTempCalculateWithTwoArray = function (t1, t2) {
//   let temperature = t1.concat(t2);
//   console.log(temperature);

//   let max = temperature[0];
//   let min = temperature[0];
//   for (let i = 0; i < temperature.length; i++) {
//     if (typeof temperature[i] !== 'number') {
//       continue;
//     }
//     // console.log(typeof temperature[i]);
//     // debugger; //manually breakpoint will come here
//     if (max < temperature[i]) {
//       max = temperature[i];
//     }
//     if (min > temperature[i]) {
//       min = temperature[i];
//     }
//   }
//   //   console.log(max);
//   //   console.log(min);
//   return max - min;
// };

// console.log(
//   maxTempCalculateWithTwoArray(
//     [4, 1, 'error', 10.91, 10.9],
//     [5, 1, 'error', 15]
//   )
// );

// challenge 1

// Given an array of forecasted max temp, the thermometer displays a string with these temperatures

// eg : [17,21,23] will print

// "... 17^C in 1 days ... 21^C in 2 days ... 23^C in 3 days ..."

//create a function 'printForecast' which takes in an array 'arr' and logs a string like the above to the console

// TEST DATA 1 : [17,21,23]
// TEST DATA 2 : [12,5,-5,0,4]

// const printForecast = function (arr) {
//   let finalOutput = ' ';
//   let lastItem = ' ...';
//   for (let i = 0; i < arr.length; i++) {
//     finalOutput += `... ${arr[i]}^C in ${i + 1} days `;
//     // console.log();
//   }
//   console.log(finalOutput + lastItem);
//   console.log(finalOutput.trim()); //REMOVES UNWANTED SPACE FROM THE BEGINNING
// };

// printForecast([17, 21, 23]); //now each line output coming need to print it in a single line

//The Rise of AI Tools

//challenge 2

// you are building a time tracking app. you need a function that receives daily work hours for a certain WebSocket, and returns
// 1. Total hours worked
// 2. Average daily hours
// 3. The day with the most hours worked
// 4. Number of days worked
// 5. whether the week was full-time(worked 35 hours or more)

// Test data : [7.5,8,6.5,0,8.5,4,0]

const totlhrs = function (weeklyhrs) {
  let totalhours = 0;
  for (let i = 0; i < weeklyhrs.length; i++) {
    totalhours += weeklyhrs[i];
  }
  return totalhours;
};

//day with most hrs worked
const mostWorkedDay = function (weeklyhrs) {
  let mosthrsday = weeklyhrs[0];
  for (let i = 0; i < weeklyhrs.length; i++) {
    if (mosthrsday < weeklyhrs[i]) {
      mosthrsday = weeklyhrs[i];
    }
  }
  return mosthrsday;
};

// Number of days worked
const numberOfDaysWorked = function (weeklyhrs) {
  let count = 0;
  for (let i = 0; i < weeklyhrs.length; i++) {
    if (weeklyhrs[i] > 0) {
      count++;
    }
  }
  return count;
};

//Week was full-time (35>=)
let fullTime = function (weekworkedhrs) {
  const Totalhours = totlhrs(weekworkedhrs);
  return Totalhours >= 35
    ? 'Week was Full Time'
    : 'This week Not Reached 35hrs (FUll Time)';
};

const weeklyhrs = [7.5, 8, 6.5, 0, 8.5, 4, 0];

console.log(`Total hours worked : ${totlhrs(weeklyhrs)}`);
console.log(
  `Average daily hours : ${Math.round(totlhrs(weeklyhrs) / weeklyhrs.length)}`
);

console.log(`Day with most hrs worked : ${mostWorkedDay(weeklyhrs)}`);

console.log(`Number of days worked : ${numberOfDaysWorked(weeklyhrs)}`);

console.log(fullTime(weeklyhrs));
