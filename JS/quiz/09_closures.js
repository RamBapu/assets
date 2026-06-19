function outerFunction() {
  const outerVar = "I am outside of innerFunction";

  function innerFunction() {
    console.log(outerVar); // `innerFunction` can still access `outerVar`.
  }

  return innerFunction;
}

const inner = outerFunction(); // `inner` now holds a reference to `innerFunction`.

inner(); // "I am outside of innerFunction"
// Even though `outerFunction` has completed execution, `inner` still has access to variables defined inside `outerFunction`.
