const fs = require("fs");

fs.readFile("./file.txt", () => {
  // Poll phase
  setTimeout(() => console.log("timeout"), 0); // Timer phase
  setImmediate(() => console.log("immediate")); // Check phase

  // Inside I/O callback: setImmediate ALWAYS wins
  // Output: immediate → timeout
});

// Outside I/O callback: ORDER IS NOT GUARANTEED
// (depends on CPU / system timer precision)
