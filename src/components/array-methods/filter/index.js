/**
 * filter
 * - Creates a new array with elements that pass the condition
 * - Does not mutate the original array
 * - Skips empty slots in sparse arrays
 * - Output array is always dense (no holes)
 * - Executes synchronously
 * - callback receives three arguments (item, index, array)
 * - Throws TypeError if callback is not a function
 */

const array = [1, 2, 3, 4];

const result = array.filter((item, index) => {
  return item % 2 == 0;
});

console.log(result); // [2, 4]

// Example with sparse array
const sparseArray = [1, , 3];

const filtered = array.filter((item) => true);

console.log(filtered); // [1, 3]

// Example of thisArg
const result1 = array.filter(
  function (item) {
    return item > this.min;
  },
  { min: 2 }
);

console.log(result1); // [3, 4]
