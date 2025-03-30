'use strict';

// const restaurant = {
//   name: 'Classico Italiano',
//   location: 'Via Angelo Tavanti 23, Firenze, Italy',
//   categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
//   starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
//   mainMenu: ['Pizza', 'Pasta', 'Risotto'],
//   order: function (starterIndex, mainMenuIndex) {
//     return [this.starterMenu[starterIndex], this.mainMenu[mainMenuIndex]];
//   },
// };

// console.log(restaurant);

// const array = [3, 5, 9];
// const [a, b, c, d] = array;

// console.log(a, b, c, d); //no value in array for the particular index means 'undefined' will get store.

// let [first, , second] = restaurant.categories; //if we wanted to store the first one and third one then use space(, ,);
// console.log(first, second);

// // const temp = first; //swapping variables using temp variable help
// // first = second;
// // second = temp;
// // console.log(first, second);

// // swapping with the help of destructuring
// [first, second] = [second, first];
// console.log(first, second);

// console.log(restaurant.order(2, 0));

// const [starter, mainCourse] = restaurant.order(2, 0);
// console.log(starter, mainCourse);

// const nested = [2, 5, [6, 7]];
// const [i, , j] = nested;
// console.log(i, j);

// const [k, , [l, m]] = nested;
// console.log(k, l, m);

// //default values

// const arrays = [3, 5, 9];
// const [e = 1, r = 2, t = 1, y = 2] = arrays;
// console.log(e, r, t, y); //now undefined will come in place of y, instead of that we can set default value

//Destructuring Objects
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },
  order: function (starterIndex, mainMenuIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainMenuIndex]];
  },
  orderDelivery: function ({ time, address, mainIndex, startIndex }) {
    console.log(
      `Order Recieved. The ${this.starterMenu[startIndex]} and category ${this.categories[mainIndex]} will ship to this ${address} address. Within ${time}  we will deliver your order.`
    );
  },

  orderPasta: function (ing1, ing2, ing3) {
    console.log(
      `Here is your delecious pasta with ${ing1},${ing2} and ${ing3}`
    );
  },

  orderPizza: function (mainIngredeint, ...otherIngredeints) {
    console.log(mainIngredeint);
    console.log(otherIngredeints);
  },
};

restaurant.orderDelivery({
  time: '10:10',
  address: 'Chennai',
  mainIndex: '2',
  startIndex: '1',
});

const { name, openingHours, categories } = restaurant;
// console.log(name, openingHours, categories);

//with new names as property =>

// const {
//   name: restaurantName,
//   openingHours: restaurantOpeningHours,
//   categories: MainCategories,
// } = restaurant;

// console.log(restaurantName, restaurantOpeningHours, MainCategories);

// const AswinObj = restaurant;

// console.log(AswinObj);

// const { openingHours: aswObj } = restaurant;
// console.log(aswObj);

// const { location: loc = [], newkey = [] } = restaurant; //if value available means it will print other wise default []
// console.log(loc, newkey);

let a = 111;
let b = 999;

// console.log(a);
// console.log(b);
const obj = { a: 10, b: 11 };

({ a, b } = obj);
// console.log(a);
// console.log(b);
// console.log(obj);

//Nested objects

// const {
//   fri: { open, close },
// } = openingHours;
// console.log(open, close);

const arr = [1, 2, 3, 4];
// console.log(arr);

// arr.unshift(6, 6);
// console.log(arr);

// const newArr = [6, 6, ...arr];
// console.log(newArr);
// console.log(...newArr); //using spread operator individually we will get array elements.

// const newMenu = [...restaurant.mainMenu, 'Kappa', 'Pidi'];
// console.log(newMenu);

// const mergeTwoArray = [...newMenu, ...newArr];
// console.log(mergeTwoArray);

// const str = 'Aswin';
// const letters = [...str, '', 's.'];
// console.log(letters);

//Functions that accepts multiple arguments

// restaurant.orderPasta('powder', 'Sause', 'Chilli');

//Real world Example
// const ingredients = [
//   prompt('lets make pasta!, ingredeint 1'),
//   prompt('Ingredeint 2?'),
//   prompt('Ingredeint 3?'),
// ];

// console.log(ingredients);

// restaurant.orderPasta(...ingredients);

// objects

// const copyRestaurant = { foundIn: 2001, ...restaurant, founder: 'Aswin' };
// console.log(copyRestaurant);

const newArray = ['Aswin', 'Kannan', 'Ambu'];

const [firstEle, SecondEle, ...remaining] = newArray;

// console.log(firstEle);
// console.log(SecondEle);
// console.log(remaining);

const [pizza, , risotto, ...otherFood] = [
  ...restaurant.mainMenu,
  ...restaurant.starterMenu,
];

// console.log(pizza, risotto, otherFood);

//objects
const { sat, ...weekdays } = restaurant.openingHours;
// console.log(weekdays);
// console.log(sat);

//Rest Parameters

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

// add(2, 1);
// add(2, 1, 7);
// add(22, 1, 5, 2, 14, 6);

const x = [10, 20, 30, 40];
add(...x);

console.log(restaurant.orderPizza('veg', 'capsicum', 'carrot', 'chilli'));
