const value = { number: 10 };

const multiply = (x = { ...value }) => {
  console.log((x.number *= 2));
};

multiply(); // 20
multiply(); // 20
multiply(value); // 20 - When the value is passed, x will be a shallow copy of value
multiply(value); // 40 - Next time value is passed as 20,  because both x and number are changed previously
