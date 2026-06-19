const numbers = [1, 2, 3];

const doubled = numbers.map((n) => n * 2);
console.log(doubled, numbers); // map creates a new array

numbers.forEach((n) => {
  console.log(n * 2);
}); // foreach modifies the existing array
