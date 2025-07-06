// Predict and explain...
// What will be logged by this code?
// Check your prediction and explanation by running the code.

const person1 = {
  name: "Abdi",
  location: "London",
  id_number: 17,
};

const person2 = {
  name: "Shadi",
  job: "Software Engineer",
  location: "London",
  id_number: 28,
};

// person2 is a new object, not a reference to person1
const person3 = person2;

// person3 is a reference to person2, so any changes to person3 will affect person2
person3.location = "Manchester";

// person1 name is accessed using dot notation
// person1 name is logged Abdi
console.log(person1.name);

// person2 name is accessed using bracket notation
// person2 name is logged Shadi
console.log(person2["name"]);

// person1 id_number is accessed using dot notation
// person1 id_number is logged 17 and person2 id_number is logged 28
// person1 id_number is less than person2 id_number
// the comparison will log false
console.log(person1.id_number > person2["id_number"]);

// person1 job is undefined because person1 does not have a job property
// person1 job is logged undefined
console.log(person1.job);

// person1 location is "London", person2 location is "Manchester"
// the comparison will log false
console.log(person1.location === person2.location);

// person1 location is "London", person3 location is "Manchester"
// the comparison will log false
console.log(person1.location === person3.location);

// person2 location is "Manchester", person3 location is also "Manchester"
// the comparison will log true
console.log(person2.location === person3.location);
