/**
 * map
 * - map always returns a new array of the same length.
 * - Skips holes in sparse arrays (but preserves hole positions in output).
 * - Does not mutate the original array (unless callback does).
 * - Throws TypeError if callback is not a function.
 */

const array = [1, 2, 3];

const result = array.map((item, index) => {
  return item + 1;
});

console.log(result); // [2, 3, 4]
