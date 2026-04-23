console.log("start");

setTimeout(() => {
  console.log("Timeout 1"); // Callback queue / Macrotask queue - setTimeout, setInterval, HTTP requests
}, 0);

Promise.resolve().then(() => {
  console.log("Promise 1"); // Microtask queue - Promises
});

setTimeout(() => {
  console.log("Timeout 2");
}, 0);

console.log("end");
