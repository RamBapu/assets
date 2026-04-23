function multiply(a, b) {
  console.log(a * b);
}

// Using bind() to create a new func from an existing func with some arguments pre-set
const multiplyBy5 = multiply.bind(null, 5);
multiplyBy5(3);
