/**
 * every method
 */

const array = [1, 2, 3, 4];

const result = array.every((item, index) => {
  return item > 0;
});

console.log(result); // true

// Example notFound
const notFound = array.every((item, index) => {
  return item < 0;
});

console.log(notFound); // false

// Example with thisArg
const resultWithThisArg = array.every(
  function (item) {
    return item > this.min;
  },
  { min: 0 }
);

console.log(resultWithThisArg); // true
