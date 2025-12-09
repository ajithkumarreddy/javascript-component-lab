/**
 * Flatten:
 * Takes a nested array and returns a single-level array.
 */

function flatten(arr) {
  let result = [];

  for (let item of arr) {
    if (Array.isArray(item)) {
      result.push(...flatten(item));
    } else {
      result.push(item);
    }
  }

  return result;
}

// Implementation

console.log(flatten([1, 2, 3])); // [1, 2, 3]

console.log(flatten([1, [2, 3]])); // [1, 2, 3]

console.log(
  flatten([
    [1, 2],
    [3, 4],
  ])
); // [1, 2, 3, 4]

console.log(flatten([1, [2, [3, [4, [5]]]]])); // [1, 2, 3, 4, 5]
