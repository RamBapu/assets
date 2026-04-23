function debounce(fn, delay) {
  let timer = null;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

// On every call
//  - delete the previous timer
//  - start a new timer
//  - call the function with arguments once the timer is run

function throttle(fn, limit) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= limit) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

// On every call
//  - check for the last call
//  - if the last call exceeds the limit, call the function with arguments
