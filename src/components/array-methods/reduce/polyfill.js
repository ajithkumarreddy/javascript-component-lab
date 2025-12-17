/**
 * reduce polyfill
 */

if (!Array.prototype.myReduce) {
  Array.prototype.myReduce = function (callback, initialValue) {
    if (this == null) {
      throw new TypeError(
        "Array.prototype.myReduce called on null or undefined"
      );
    }

    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    const array = this;
    const len = array.length;

    let accumulator;
    let startIndex = 0;

    if (arguments.length > 1) {
      accumulator = initialValue;
    } else {
      while (startIndex < len && !(startIndex in array)) {
        startIndex++;
      }

      if (startIndex >= len) {
        throw new TypeError("Reduce of empty array with no initial value");
      }

      accumulator = array[startIndex];
    }

    for (let i = 0; i < len; i++) {
      if (i in array) {
        accumulator = callback(accumulator, array[i], i, array);
      }
    }

    return accumulator;
  };
}

// Implementation with initialValue

const array = [1, 2, 3, 4];

const sum = array.myReduce((acc, curr) => {
  return acc + curr;
}, 0);

console.log(sum);

// Implementation with initialValue

const array1 = [10, 20, 30];

const sum1 = array1.myReduce((acc, curr) => {
  return acc + curr;
});

console.log(sum1);
