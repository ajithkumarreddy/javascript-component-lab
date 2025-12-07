/**
 * func.bind polyfill
 */

if (!Function.prototype.myBind) {
  Function.prototype.myBind = function (context, ...preset) {
    const fn = this;

    return function (...rest) {
      return fn.apply(context, [...preset, ...rest]);
    };
  };
}

// Implementation
function greet(age, height) {
  console.log(`Hi ${this.name}, age ${age}, height ${height}`);
}

const person = {
  name: "Rama",
};

const boundFunction = greet.bind(person, 25);
boundFunction("6 feet");
