// Predict and explain...
// What will happen when this program is run?
// Check your prediction and explanation by running the program.
// Fix anything that needs fixing.

// The code has an error in the way the location is defined.
// The `location` property is not defined correctly.
// The person.location should be set to person.city, which is missing in the original code.
function checkLivesNearCYF(person) {
  const cyfLocations = [
    "Birmingham",
    "Cape Town",
    "Glasgow",
    "London",
    "Manchester",
  ];
  return cyfLocations.includes(person.city);
}

const mo = {
  name: "Mo",
  city: "Glasgow",
  focus: "React",
};

const sayed = {
  name: "Sayed",
  city: "Edinburgh",
  focus: "SQL",
};

// The function uses the `includes` method to check if the person's location is in the `cyfLocations` array.
// The function will return `true` if the person's location is one of the specified locations, and `false` otherwise.
console.assert(checkLivesNearCYF(mo));

// The function will return `false` for Sayed because his city is "Edinburgh", which is not in the `cyfLocations` array.
console.assert(!checkLivesNearCYF(sayed));
