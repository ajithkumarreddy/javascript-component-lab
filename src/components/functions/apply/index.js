/**
 * apply() is Same as call(), arguments passes as an array
 */

function greet(age) {
  console.log(`Hi ${this.name}, age ${age}`);
}

const person = {
  name: "Rama",
};

greet.apply(person, [25]);
