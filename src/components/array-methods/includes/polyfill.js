/**
 * Includes polyfill
 */

if (!Array.prototype.myIncludes) {
  Array.prototype.myIncludes = function (searchElement, startIndex = 0) {
    if (this == null) {
      throw new TypeError(
        "Array.prototype.myIncludes called on null or undefined"
      );
    }

    const array = this;
    const len = array.length;

    if (len === 0) return false;

    const start = startIndex >= 0 ? startIndex : Math.max(0, len + startIndex);

    for (let i = start; i < len; i++) {
      if (i in array) {
        const current = array[i];

        if (
          current === searchElement ||
          (Number.isNaN(current) && Number.isNaN(searchElement))
        ) {
          return true;
        }
      }
    }

    return false;
  };
}

// Implementation
const array = [1, 2, 3, 2];

// Basic usage
console.log(array.myIncludes(2)); // true

// Using fromIndex (searchElement, fromIndex)
console.log(array.myIncludes(2, 2)); // true → searches from index 2 → finds 2 at index 3

console.log(array.myIncludes(2, 3)); // true → searches from index 3 → finds 2 at index 3

// Element not found
console.log(array.myIncludes(5)); // false

// Example with negative fromIndex
console.log(array.myIncludes(2, -2)); // true → starts search from length - 2 → index 2

// SameValueZero comparison (important interview case)
const nanArray = [1, NaN, 3];
console.log(nanArray.myIncludes(NaN)); // true
