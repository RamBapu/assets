function debounce(fn, delay) {
  let timer;

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
