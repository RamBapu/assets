// spread operator - unpacking an array - (...)
function sum(numsArr) {
  return Math.max(...numsArr);
}

console.log(sum([1, 2, 3, 4, 5]));

// rest operator - indefinite number of elements - (...args)
function multiply(...nums) {
  return nums.map((x) => x * 5);
}

console.log(multiply(1, 2, 3, 4, 5));

const [a, b, ...rest] = [1, 2, 3, 4, 5];
console.log(rest);
