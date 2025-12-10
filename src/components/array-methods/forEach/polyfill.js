/**
 * forEach polyfill
 */

if (!Array.prototype.myForEach) {
  Array.prototype.myForEach = function (callback, thisArg) {
    if (this == null) {
      throw new TypeError(
        "Array.prototype.forEach called on null or undefined"
      );
    }

    if (typeof callback !== "function") {
      throw new TypeError(callback + " is not a function");
    }

    const array = this;
    const len = array.length;

    for (let i = 0; i < len; i++) {
      if (i in array) {
        // skips empty slots
        callback.call(thisArg, array[i], i, array);
      }
    }
  };
}

// Implementation
const array = [1, 2, 3];

array.myForEach((item, index) => {
  console.log("item: " + item + ", at index: " + index);
});

// Example of thisArg
array.myForEach(
  function (item) {
    console.log(this.prefix + item);
  },
  { prefix: "Value: " }
);
