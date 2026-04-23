const numbers = [1, 2, 3];

const doubled = numbers.map((n) => n * 2);
console.log(doubled, numbers);

numbers.forEach((n) => {
  console.log(n * 2);
});
