/**
 * Calls a function immediately, setting this manually
 */

function greet(age) {
  console.log(`Hi ${this.name}, age ${age}`);
}

const person = {
  name: "Rama",
};

greet.call(person, 25);
