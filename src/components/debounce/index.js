/**
 * Debounce:
 * Debounce ensures a function runs ONLY after the user stops triggering it
 * for a specified delay. If the event keeps firing, the timer resets.
 *
 * How this implementation works:
 * - Maintain a timeoutId.
 * - Every call clears the previous timer.
 * - Set a new timer; when delay completes, call the original function.
 * - Only the last call within the delay period executes.
 */

function debounce(fn, delay) {
  let timeoutId;

  return function (...args) {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// Implementation
function fetchResults(value) {
  console.log("API called for: ", value);
}

const debouncedSearch = debounce(fetchResults, 1000);

debouncedSearch("cart");
debouncedSearch("users");
