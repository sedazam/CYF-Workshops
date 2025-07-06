// Fill in the code below so that the tests pass.

const people = [];

people.push({
  name: "Saqib",
  favouriteFoods: "salad",
});

people.push({
  name: "Shadi",
  favouriteFoods: "mango",
});

people.push({
  name: "Navid",
  favouriteFoods: "macarons",
});

// The array favouriteFoods was not defined yet.
// It should be an array that contains the favourite foods of each person in the people array.
const favouriteFoods = [
  people[0].favouriteFoods,
  people[1].favouriteFoods,
  people[2].favouriteFoods,
];

// TODO: Fill the array favouriteFoods with the favourite foods of each person.
// You must not type the strings (i.e. your solution should not involve you typing the word "salad").

console.assert(favouriteFoods.length === 3);
console.assert(favouriteFoods.includes("salad"));
console.assert(favouriteFoods.includes("mango"));
console.assert(favouriteFoods.includes("macarons"));
