/**
 * forEach
 * - Cannot be stopped in between using break;
 * - Skips empty slots in sparse arrays
 * - always returns undefined
 * - Executs synchronously, for async use for...of
 * - callback receives three arguments for each iteration (item, index, array)
 */

const array = [1, 2, 3];

array.forEach((item, index) => {
  console.log("item: " + item + ", at index: " + index);
});

// Example of thisArg
array.forEach(
  function (item) {
    console.log(this.prefix + item);
  },
  { prefix: "Value: " }
);

// Example of Array prototype
Array.prototype.forEach.call("abc", console.log);
