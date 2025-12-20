/**
 * some
 * - Returns true if at least ONE element satisfies the condition
 * - Stops execution as soon as a match is found
 * - Skips empty slots in sparse arrays
 * - Returns false if no element matches
 */

const array = [1, 2, 3, 4];

// Check if any element is greater than 20
const result = array.some((item, index) => {
  return item > 2;
});

console.log(result); // true

// Example of this argument
const result1 = array.some(
  function (item, index) {
    // Important note: Use function here instead of arrow function in order to accesss thisArg
    return item > this.limit;
  },
  { limit: 3 }
);

console.log(result1); // true
