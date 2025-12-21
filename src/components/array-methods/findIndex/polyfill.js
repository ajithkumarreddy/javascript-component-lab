/**
 * findIndex polyfill
 */

if (!Array.prototype.myFindIndex) {
  Array.prototype.myFindIndex = function (callback, thisArg) {
    if (this == null) {
      throw new TypeErrorError("Array.prototype.findIndex called on null or undefined");
    }

    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    const array = this;
    const len = array.length;

    for (let i = 0; i < len; i++) {
      if (i in array) {
        if (callback.call(thisArg, array[i], i, array)) {
          return i;
        }
      }
    }

    return -1;
  };
}

// Implementation

const array = [1, 2, 3, 4];

// Find the index of the first element equal to 3
const result = array.myFindIndex((item, index) => {
  return item === 3;
});

console.log(result); // 2

// Example NotFound
const notFound = array.myFindIndex((item) => item > 10);
console.log(notFound); // -1

// Example using thisArg (use function, not arrow function)
const resultWithThisArg = array.myFindIndex(
  function (item, index) {
    return item > this.number;
  },
  { number: 3 }
);

console.log(resultWithThisArg); // 3
