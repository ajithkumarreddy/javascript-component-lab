/**
 * find
 * - Returns the FIRST element that satisfies the condition
 * - Stops execution as soon as a match is found (early exit)
 * - Returns undefined if no element matches
 * - Skips empty slots in sparse arrays
 * - Does NOT mutate the original array
 * - Callback receives (item, index, array)
 * - Supports thisArg (only with normal functions)
 */

const array = [1, 2, 3, 4];

// Find the first element equal to 2
const result = array.find((item, index) => {
  return item === 2;   // must return a boolean
});

console.log(result); // 2

// Element not found
const notFound = array.find(item => item > 10);
console.log(notFound); // undefined

// Example using thisArg (use function, not arrow function)
const resultWithThisArg = array.find(
  function (item) {
    return item > this.limit;
  },
  { limit: 2 }
);

console.log(resultWithThisArg); // 3

// Example with sparse array
const sparseArray = [ , , 3, 4];

const sparseResult = sparseArray.find(item => item > 2);
console.log(sparseResult); // 3
