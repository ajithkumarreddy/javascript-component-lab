/**
 * Throttle:
 * ---------
 * Throttle ensures a function runs at most ONCE in the given delay.
 * Even if the function is triggered multiple times, it will only
 * execute again after 'delay' milliseconds have passed.
 * 
 * Executes immediately on first call.
 * Starts a cooldown timer (delay).
 * Any calls during the cooldown are ignored.
 * After delay ends, the next call can trigger again.
 * Runs at a fixed rate.
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
