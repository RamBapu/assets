# JS Practice

### Reverse string

- spread,reverse,join
- using for loop

### Pallindrome

- reversed = original (lowercase)
- two pointer approach - left right

### Largest number

- Math max function
- for loop
- reduce function

### Remove duplicates

- using Set
- using for loop - includes
- using reduce function
- using map - for array of objects

### Count frequency of characters

- using for loop and objects
- using map

### Move zeros to the end

- using two pointer - for loop
- using filter

### Flatten array

- using arr flat function
- using recursion

### Transform

[ { userId: 1, name: "Ram" } ] → { 1: { name: "Ram" } }

- using for
- using reduce

### Group by id / Merge two array of objects

- using map
- using reduce

### Debounce functions

```
function debounce(fn, delay) {
  let timer;

  return function (...args) {
    clearTimeout(timer);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delay);
  };
}

const handleSearch = debounce((value) => {
  console.log("API Call:", value);
}, 500);
```

### Throttle functions

```
function throttle(fn, delay) {
  let lastCall = 0;

  return function (...args) {
    const now = Date.now();

    if (now - lastCall >= delay) {
      lastCall = now;
      fn.apply(this, args);
    }
  };
}

const handleScroll = throttle(() => {
  console.log("Scroll event");
}, 500);
```
