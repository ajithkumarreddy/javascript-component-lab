/**
 * apply() is Same as call(), arguments passes as an array
 * fn.apply(object, [arg1, arg2, arg3, ...]);
 */

function greet(age, height) {
  console.log(`Hi ${this.name}, age ${age}, height ${height}`);
}

const person = {
  name: "Rama",
};

greet.apply(person, [25, "6 feet"]);
