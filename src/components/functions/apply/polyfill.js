/**
 * func.apply polyfill
 */

if (!Function.prototype.myApply) {
  Function.prototype.myApply = function (context, argsArray) {
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
      result = context[fnSym](...(argsArray || []));
    } finally {
      delete context[fnSym];
    }

    return result;
  };
}

// Implementation
function greet(age, height) {
  console.log(`Hi ${this.name}, age ${age}, height ${height}`);
}

const person = {
  name: "Rama",
};

greet.myApply(person, [25, "6 feet"]);
