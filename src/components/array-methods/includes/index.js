/**
 * includes
 * - Checks whether an array contains a specific value
 * - Returns true if the value is found, otherwise false
 * - Does NOT mutate the original array
 * - Uses SameValueZero comparison
 *   (NaN === NaN is treated as true, +0 and -0 are equal)
 * - Accepts an optional fromIndex to start searching from
 */

const array = [1, 2, 3, 2];

// Basic usage
console.log(array.includes(2)); // true

// Using fromIndex (searchElement, fromIndex)
console.log(array.includes(2, 2)); // true → searches from index 2 → finds 2 at index 3

console.log(array.includes(2, 3)); // true → searches from index 3 → finds 2 at index 3

// Element not found
console.log(array.includes(5)); // false

// Example with negative fromIndex
console.log(array.includes(2, -2)); // true → starts search from length - 2 → index 2

// SameValueZero comparison (important interview case)
const nanArray = [1, NaN, 3];
console.log(nanArray.includes(NaN)); // true
