console.log({ a: 1 } == { a: 1 }); // false - obj memory references are different
console.log({ a: 1 } === { a: 1 }); // false

const obj1 = { a: 1 };
const obj2 = obj1;
console.log(obj1 == obj2); // true
console.log(obj1 === obj2); // true
