console.log(foo); // undefined
var foo = 1;
console.log(foo); // 1

// Start of temporal dead zone
console.log(value); // Reference Error
// End of temporal dead zone

let value = 1;
console.log(value); // 1

// var ,let and const declared variables are all hoisted. /
// var declared variables are auto-initialized with an undefined value.
// However, let and const variables are not initialized and accessing them before the declaration will result in a ReferenceError exception
// because they are in a "temporal dead zone" from the start of the block until the declaration is processed.
