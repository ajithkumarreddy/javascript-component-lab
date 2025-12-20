/**
 * find polyfill
 */

if (!Array.prototype.myFind) {
  Array.prototype.myFind = function (callback, thisArg) {
    if (this == null) {
      throw new TypeError("Array.prototype.myFind called on null or undefined");
    }

    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    const array = this;
    const len = array.length;

    for (let i = 0; i < len; i++) {
      if (i in array) {
        if (callback.call(thisArg, array[i], i, array)) {
          return array[i];
        }
      }
    }

    return undefined;
  };
}

// Implementation

const array = [1, 2, 3, 4];

// Find the first element equal to 2
const result = array.myFind((item, index) => {
  return item === 2; // must return a boolean
});

console.log(result); // 2

// Element not found
const notFound = array.myFind((item) => item > 10);
console.log(notFound); // undefined

// Example using thisArg (use function, not arrow function)
const resultWithThisArg = array.myFind(
  function (item) {
    return item > this.limit;
  },
  { limit: 2 }
);

console.log(resultWithThisArg); // 3
