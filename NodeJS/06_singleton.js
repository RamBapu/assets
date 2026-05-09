// counter.js
let count = 0;
module.exports = {
  increment: () => ++count,
  getCount: () => count,
};

// a.js
const counter = require("./counter");
counter.increment();
counter.increment();
console.log(counter.getCount()); // 2

// b.js
const counter = require("./counter");
counter.increment();
console.log(counter.getCount()); // 3  ← NOT 1, shares state with a.js!

// main.js
require("./a");
require("./b");
// counter.js was only executed ONCE
// a.js and b.js share the same instance

// A singleton is a design pattern that ensures a class or module is instantiated only once throughout the entire application.
