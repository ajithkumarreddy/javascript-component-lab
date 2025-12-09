/**
 * Throttle:
 * ---------
 * Throttle ensures a function runs at most ONCE in the given delay.
 * Even if the function is triggered multiple times, it will only
 * execute again after 'delay' milliseconds have passed.
 *
 * How this implementation works:
 * - Allow immediate execution when not throttled.
 * - Set a flag (true) after running.
 * - Block further calls until delay passes.
 * - Reset the flag after delay to allow next execution.
 */

function throttle(fn, delay) {
  let isThrottled = false;

  return function (...args) {
    if (isThrottled) return;

    fn.apply(this, args);
    isThrottled = true;

    setTimeout(() => {
      isThrottled = false;
    }, delay);
  };
}

// Implementation
function logScroll() {
  console.log("Scroll event fired at", Date.now());
}

const throttledScroll = throttle(logScroll, 1000);

window.addEventListener("scroll", throttledScroll);
