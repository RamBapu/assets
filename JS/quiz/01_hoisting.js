console.log(foo); // undefined
var foo = 1;
console.log(foo); // 1

// Start of temporal dead zone
console.log(value); // Reference Error
// End of temporal dead zone

let value = 1;
console.log(value); // 1
