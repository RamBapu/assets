const fs = require("fs");

console.log("START"); // → Call stack (sync)

setTimeout(() => console.log("timer"), 0); // → Timers phase
setImmediate(() => console.log("immediate")); // → Check phase

fs.readFile("file.txt", (err, data) => {
  // → Poll phase (after I/O)
  console.log("file read");
  process.nextTick(() => console.log("nextTick inside I/O")); // → runs before next phase
});

Promise.resolve().then(() => console.log("promise")); // → Microtask queue

console.log("END"); // → Call stack (sync)

// Output: START → END → promise → timer → file read → nextTick inside I/O → immediate
