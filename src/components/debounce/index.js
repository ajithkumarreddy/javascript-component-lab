/**
 * Debounce:
 * Debounce ensures a function runs ONLY after the user stops triggering it
 * for a specified delay. If the event keeps firing, the timer resets.
 *
 * Every call resets the timer.
 * Only after the user stops triggering for the delay time, the function runs.
 * Only the last call within the delay executes.
 * Runs only after inactivity.
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
