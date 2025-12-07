/**
 * Returns a new function with 'this' permanently set
 */

function greet(age) {
  console.log(`Hi ${this.name}, age ${age}`);
}

const person = {
  name: "Rama",
};

const newFunction = greet.bind(person, 25);
newFunction();
