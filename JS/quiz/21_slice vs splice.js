// slice - array.slice(start, end)
const nums = [1, 2, 3, 4];
const subArr = nums.slice(2, 4);
console.log(nums);
console.log(subArr);

// splice - array.splice(start, deleteCount, item1, ...)
const numbers = [1, 2, 3, 4];
// At index 2, remove 1 element, add 99
const removed = numbers.splice(2, 1, 99);

console.log(removed); // Output: [3]
console.log(numbers); // Original modified: [1, 2, 99, 4]
