const arr1 = [1, 2, 3, 4, 5];
const arr2 = arr1; // both will have same memory reference
arr2[2] = 4;

console.log(arr1); // [ 1, 2, 4, 4, 5 ]
console.log(arr2); // [ 1, 2, 4, 4, 5 ]
console.log(arr1 == arr2); // true
console.log(arr1 === arr2); // true

console.log(
  "---------------------------------------------------------------------------------------------------------",
);

const arr1 = [1, 2, 3, 4, 5];
const arr2 = [...arr1];
arr2[2] = 4;

console.log(arr1); // [ 1, 2, 3, 4, 5 ]
console.log(arr2); // [ 1, 2, 4, 4, 5 ]
console.log(arr1 == arr2); // false - both different values
console.log(arr1 === arr2); // false
console.log(typeof arr1); // object
