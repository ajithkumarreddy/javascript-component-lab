/**
 * func.call polyfill
 */

if (!Function.prototype.myCall) {
  Function.prototype.myCall = function (context, ...args) {
    if (typeof this !== "function") {
      throw new TypeError(this, " can't be executed");
    }

    if (context == null || context == undefined) {
      context = globalThis;
    } else {
      context = Object(context);
    }

    let fnSym = Symbol("fn");
    let result;

    try {
      context[fnSym] = this;
      result = context[fnSym](...args);
    } finally {
      delete context[fnSym];
    }

    return result;
  };
}

// Implementation
function greet(age) {
  console.log(`Hi ${this.name}, age ${age}`);
}

const person = {
  name: "Rama",
};

greet.myCall(person, 25);
