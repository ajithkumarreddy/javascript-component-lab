/**
 * In programming language, often we want to take something and extend it for objects
 * We can make use of javascript default functionality [[prototype]]
 * it's value is either null or referenced to another object "a prototype"
 */

// Implementation
let animal = {
  eats: true,
};

let rabbit = {
  jumps: true,
  __proto__: animal,
};

rabbit.__proto__ = animal;
console.log(rabbit.eats, rabbit.jumps);

// for...in loop and hasOwnProperty
console.log(Object.keys(rabbit)); // jumps

for (let prop in rabbit) {
  let isOwn = rabbit.hasOwnProperty(prop);
  console.log(prop + " isOwn: " + isOwn); // jumps, eats
}
