'use strict';

const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  order: function (starterIndex, mainMenuIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainMenuIndex]];
  },
};

console.log(restaurant);

const array = [3, 5, 9];
const [a, b, c, d] = array;

console.log(a, b, c, d); //no value in array for the particular index means 'undefined' will get store.

let [first, , second] = restaurant.categories; //if we wanted to store the first one and third one then use space(, ,);
console.log(first, second);

// const temp = first; //swapping variables using temp variable help
// first = second;
// second = temp;
// console.log(first, second);

// swapping with the help of destructuring
[first, second] = [second, first];
console.log(first, second);

console.log(restaurant.order(2, 0));

const [starter, mainCourse] = restaurant.order(2, 0);
console.log(starter, mainCourse);

const nested = [2, 5, [6, 7]];
const [i, , j] = nested;
console.log(i, j);

const [k, , [l, m]] = nested;
console.log(k, l, m);

//default values

const arrays = [3, 5, 9];
const [e = 1, r = 2, t = 1, y = 2] = arrays;
console.log(e, r, t, y); //now undefined will come in place of y, instead of that we can set default value
