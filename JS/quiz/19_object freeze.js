const obj = { name: "John" };
Object.freeze(obj);
obj.name = "Doe"; // This will not change the name property

console.log(obj); // { name: 'John' }
