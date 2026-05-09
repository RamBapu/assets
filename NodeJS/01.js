console.log("1 - synchronous");

setTimeout(() => console.log("5 - setTimeout"), 0);
setImmediate(() => console.log("6 - setImmediate"));

Promise.resolve().then(() => console.log("3 - Promise.then"));
process.nextTick(() => console.log("2 - nextTick"));

console.log("4 - synchronous end");

// Output order: 1 → 4 → 2 → 3 → 5 → 6
