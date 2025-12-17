/**
 * reduce
 * reduce reduces an array to a single value
 * by repeatedly applying a reducer function.
 *
 * array.reduce((accumulator, current) => newAccumulator, initialValue?);
 */

// example - with initial value
const array = [1, 2, 3, 4];

const sum = array.reduce((acc, cur) => {
  return acc + cur;
}, 0);

console.log(sum);

// example - without initial value
const array1 = [10, 20, 30];

const sum1 = array1.reduce((acc, curr) => acc + curr);

console.log(sum1);
