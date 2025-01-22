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

const printForecast = function (arr) {};
