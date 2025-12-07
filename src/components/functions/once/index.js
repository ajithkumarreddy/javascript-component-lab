/**
 * once() function
 * returns a function that can be called only once
 * Subsequent calls gets ignored and returns a stored value
 */

function once(fn) {
  let called = false;
  let result;

  return function (reset = false, ...args) {
    if (reset) called = false;

    if (!called) {
      result = fn.apply(this, args);
      called = true;
    }

    return result;
  };
}

// Implementation
function add(a, b) {
  return a + b;
}

const runOnce = once(add);

console.log("First call: ", runOnce(false, 1, 2));
console.log("Second call: ", runOnce(true, 1, 3));
