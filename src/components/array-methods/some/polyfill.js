/**
 * some polyfill
 */

if (!Array.prototype.mySome) {
  Array.prototype.mySome = function (callback, thisArg) {
    if (this === null) {
      throw new TypeError("Array.prototype.mySome called on null or undefined");
    }

    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    const array = this;
    const len = array.length;

    for (let i = 0; i < len; i++) {
      if (i in array) {
        if (callback.call(thisArg, array[i], i, array)) {
          return true;
        }
      }
    }

    return false;
  };
}

// Implementation
const array = [1, 2, 3, 4];

// Check if any element is greater than 20
const result = array.mySome((item, index) => {
  return item > 2;
});

console.log(result); // true

// Example of this argument
const result1 = array.mySome(
  function (item, index) {
    // Important note: Use function here instead of arrow function in order to accesss thisArg
    return item > this.limit;
  },
  { limit: 3 }
);

console.log(result1); // true
