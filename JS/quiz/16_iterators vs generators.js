// Iterators are objects that define a sequence and provide a next() method to access the next value in the sequence.
// They are used to iterate over data structures like arrays, strings, and custom objects

const iterator = {
  current: 0,
  last: 5,
  next() {
    if (this.current <= this.last) {
      return { value: this.current++, done: false };
    } else {
      return { value: undefined, done: true };
    }
  },
};

let result = iterator.next();
while (!result.done) {
  console.log(result.value); // Logs 0, 1, 2, 3, 4, 5
  result = iterator.next();
}

// Generators are a special kind of function that can pause and resume their execution, allowing them to generate a sequence of values on-the-fly.
// They are commonly used to create iterators

function* numberGenerator() {
  let num = 0;
  while (num <= 5) {
    yield num++;
  }
}

const gen = numberGenerator();
console.log(gen.next()); // { value: 0, done: false }
console.log(gen.next()); // { value: 1, done: false }
console.log(gen.next()); // { value: 2, done: false }
console.log(gen.next()); // { value: 3, done: false }
console.log(gen.next()); // { value: 4, done: false }
console.log(gen.next()); // { value: 5, done: false }
console.log(gen.next()); // { value: undefined, done: true }
