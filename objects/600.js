// Predict and explain...
// What will happen when this program is run?
// Check your prediction and explanation by running the program.
// Fix anything that needs fixing.

const person = {
  name: "Manu",
  favourite_ice_cream: "vanilla",
  favourite_topping: "marshmallows",
};

function assertFieldEquals(object, field, targetValue) {
  // The object, field, was not being accessed correctly.
  // The correct way to access a field in an object is using object[field].
  // The code below is fixed to access the field correctly.
  console.assert(object[field] === targetValue);
}

assertFieldEquals(person, "favourite_ice_cream", "vanilla");
