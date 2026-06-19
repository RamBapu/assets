const person = {
  name: "John",
  greet() {
    console.log(`Hello, my name is ${this.name}`);
  },
};

person.greet(); // Hello my name is John - Normal behaviour of 'this' for method call

const personStandalone = person.greet;
personStandalone(); // Because function call - returns undefined / window object

const newPerson = { name: "Ram" };

// Explicitly binding 'this' for a function
person.greet.call(newPerson); // Hello, my name is Ram
person.greet.apply(newPerson); // Hello, my name is Ram

const newPersonFunc = person.greet.bind(newPerson);
newPersonFunc(); // Hello, my name is Ram

// We cannot explicitly bind arrow functions using call,apply or bind
