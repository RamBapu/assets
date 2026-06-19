const controller = new AbortController();
const signal = controller.signal;

fetch("https://jsonplaceholder.typicode.com/todos/1", { signal })
  .then((response) => response.json())
  .then((data) => console.log(data))
  .catch((error) => {
    if (error.name === "AbortError") {
      console.log("Request aborted");
    } else {
      console.error("Error:", error);
    }
  });

// Call abort() to abort the request
controller.abort();
