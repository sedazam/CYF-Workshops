// Predict and explain...
// What will happen when this program is run?
// Check your prediction and explanation by running the program.
// Fix anything that needs fixing.

const person = {
  name: "Jemima",
  location: "Glasgow",
  id_number: 9,
};

// The code defines an object `person` with properties: name, location, and id_number.
// The properties are correctly defined and the object is valid.
// The code will run without errors and the object will be created as expected.
console.assert(person.name === "Jemima");

// The following assertions check if the properties of the person object are as expected.
// The location was undefined in the original code, but it has been set to "Glasgow".
console.assert(person.location === "Glasgow");

// The id_number had syntax issues in the original code, but it has been corrected to a valid number.
// The id_number is now set to 9, which is a valid number.
console.assert(person.id_number === 9);
