const promise1 = Promise.resolve(3);
// const promise2 = 42;
const promise2 = Promise.reject("error happens!");
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "foo");
});

Promise.all([promise1, promise2, promise3])
  .then((values) => {
    console.log(values); // [3, 42, 'foo']
  })
  .catch((error) => {
    console.error(error);
  });

Promise.allSettled([promise1, promise2, promise3]).then((results) => {
  results.forEach((result) => console.log(result));
});
