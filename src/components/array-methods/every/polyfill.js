if (!Array.prototype.myEvery) {
  Array.prototype.myEvery = function (callback, thisArg) {
    if (this == null) {
      throw new TypeError("Array.prototype.myEvery called on null or undefined");
    }

    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    const array = this;
    const len = array.length;

    for (let i = 0; i < len; i++) {
      if (i in array) {
        if (!callback.call(thisArg, array[i], i, array)) {
          return false;
        }
      }
    }

    return true;
  };
}

// Implementation

const array = [1, 2, 3, 4];

const result = array.myEvery((item, index) => {
  return item > 0;
});

console.log(result); // true

// Example notFound
const notFound = array.myEvery((item, index) => {
  return item < 0;
});

console.log(notFound); // false

// Example with thisArg
const resultWithThisArg = array.myEvery(
  function (item) {
    return item > this.min;
  },
  { min: 0 }
);

console.log(resultWithThisArg); // true