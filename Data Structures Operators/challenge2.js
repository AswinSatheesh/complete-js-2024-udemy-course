'use strict';
///////////////////////////////////////
// Coding Challenge #2

/* 
Let's continue with our football betting app!

1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages, you can go check if you don't remember)
3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
      Odd of victory Bayern Munich: 1.33
      Odd of draw: 3.25
      Odd of victory Borrussia Dortmund: 6.5
Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
      {
        Gnarby: 1,
        Hummels: 1,
        Lewandowski: 2
      }

GOOD LUCK 😀
*/

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski', 'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 1.33,
    x: 3.25,
    team2: 6.5,
  },
};

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")

const goalScored = game.scored;
// console.log(goalScored);

// sollution 1
// let i = 0;
// for (const scr of goalScored) {
//   console.log(`Goal ${i + 1} : ${scr} `);
//   i++;
// }

// solution2
// game.scored.forEach((goalScored, index) => {
//   console.log(`Goal ${index + 1}: ${goalScored}`);
// });

//solution 3 using entries()

for (const [index, player] of game.scored.entries()) {
  console.log(`Goal ${index + 1}: ${player}`);
}

// 2. Use a loop to calculate the average odd and log it to the console (We already studied how to calculate averages,
// you can go check if you don't remember)

// sollution 1 need to check
const oddsCalc = game.odds;
let avg = 0;
let count = 0;
for (const [key, value] of Object.entries(oddsCalc)) {
  avg += value;
  count++;
}

const finalRes = avg / count; //my solution
// console.log('Average' + finalRes);

avg /= Object.values(game.odds).length; //Udemy solution
// console.log('Average' + avg);

// console.log(finalRes);

// 3. Print the 3 odds to the console, but in a nice formatted way, exaclty like this:
//       Odd of victory Bayern Munich: 1.33
//       Odd of draw: 3.25
//       Odd of victory Borrussia Dortmund: 6.5
// Get the team names directly from the game object, don't hardcode them (except for "draw"). HINT: Note how the odds and the game objects have the same property names 😉

//Solution 1:
// for (const [key, value] of Object.entries(game.odds)) {
//   // console.log(key, value);
//   if (key == 'team1') {
//     console.log(`Odd of victory ${game.team1}: ${value}`);
//   }
//   if (key == 'x') {
//     console.log(`Odd of draw ${value}`);
//   }
//   if (key == 'team2') {
//     console.log(`Odd of victory ${game.team2}: ${value}`);
//   }
// }

// Solution 2 :

for (const [key, value] of Object.entries(game.odds)) {
  const teamName = key == 'x' ? 'draw' : `victory${game[key]}`;
  console.log(`Odd of ${teamName}: ${value}`);
}

// BONUS: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
//       {
//         Gnarby: 1,
//         Hummels: 1,
//         Lewandowski: 2
//       }

// need to do : (research and check sollution in github)
