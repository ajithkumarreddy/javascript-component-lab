/**
 * map polyfill
 */

if (!Array.prototype.myMap) {
  Array.prototype.myMap = function (callback, thisArg) {
    if (this == null) {
      throw new TypeError("Array.prototype.myMap called on null or undefined");
    }

    if (typeof callback !== "function") {
      throw new TypeError();
    }

    let result = [];
    const array = this;
    const len = this.length;

    for (let i = 0; i < len; i++) {
      if (i in array) {
        result.push(callback.call(thisArg, array[i], i, array));
      }
    }

    return result;
  };
}

// Implementation
const array = [1, 2, 3];

const result = array.myMap((item, index) => {
  return item + 1;
});

console.log(result);
