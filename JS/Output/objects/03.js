const user = { name: "Ram", age: 24 };
const admin = { admin: true, ...user };

console.log(admin); // { admin: true, name: 'Ram', age: 24 }
