/**
 * Calls a function immediately, setting 'this' manually
 * func.call(object, ...args);
 */

function greet(age) {
  console.log(`Hi ${this.name}, age ${age}`);
}

const person = {
  name: "Rama",
};

greet.call(person, 25);
