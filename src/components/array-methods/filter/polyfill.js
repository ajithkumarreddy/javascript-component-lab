if (!Array.prototype.myFilter) {
  Array.prototype.myFilter = function (callback, thisArg) {
    if (this == null) {
      throw new TypeError();
    }

    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    const array = this;
    const len = array.length;
    const result = [];

    for (let i = 0; i < len; i++) {
      if (callback.call(thisArg, array[i], i, array)) {
        result.push(array[i]);
      }
    }

    return result;
  };
}

// Implementation
const array = [1, 2, 3, 4];

const result = array.myFilter((item, index) => {
  return item % 2 == 0;
});

console.log(result); // [2, 4]

// Example of thisArg
const result1 = array.myFilter(
  function (item) {
    return item > this.min;
  },
  { min: 3 }
);

console.log(result1); // [3, 4]
