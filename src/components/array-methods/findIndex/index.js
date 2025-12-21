/**
 * findIndex
 * - Returns the INDEX of the FIRST element that satisfies the condition
 * - Stops execution as soon as a match is found (early exit)
 * - Returns -1 if no element matches
 * - Skips empty slots in sparse arrays
 * - Does NOT mutate the original array
 * - Callback receives (item, index, array)
 * - Supports thisArg (only with normal functions)
 */

const array = [1, 2, 3, 4];

// Find the index of the first element equal to 3
const result = array.findIndex((item, index) => {
  return item === 3;
});

console.log(result); // 2

// Example NotFound
const notFound = array.findIndex((item) => item > 10);
console.log(notFound); // -1

// Example using thisArg (use function, not arrow function)
const resultWithThisArg = array.findIndex(
  function (item, index) {
    return item > this.number;
  },
  { number: 3 }
);

console.log(resultWithThisArg); // 3
