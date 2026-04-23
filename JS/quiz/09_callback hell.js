// Callback hell
getFirstData((data) => {
  getSecondData(data, (data) => {
    getThirdData(data, (result) => {
      console.log(result); // Output: {id: 1, title: "First Data Second Data Third Data"}
    });
  });
});

// Callback function
function greet(name, callback) {
  console.log("Hello " + name);
  callback();
}

function sayGoodbye() {
  console.log("Goodbye!");
}

greet("Alice", sayGoodbye);

// Promises chaining
getFirstData()
  .then(getSecondData)
  .then(getThirdData)
  .then((data) => {
    console.log(data); // Output: {id: 1, title: "First Data Second Data Third Data"}
  })
  .catch((error) => console.error("Error:", error));

// Promise.all() - all or none
Promise.all([getData1(), getData2(), getData3()])
  .then((results) => {
    console.log(results); // Output: [{ id: 1, title: 'Data 1' }, { id: 2, title: 'Data 2' }, { id: 3, title: 'Data 3' }]
  })
  .catch((error) => {
    console.error("Error:", error);
  });
