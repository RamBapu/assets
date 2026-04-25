let person1 = { name: "Ram" };
const member1 = [person1];
person1 = null; // this doesn't affect the array

console.log(member1); // [ { name: 'Ram' } ]

let person2 = { name: "Ram" };
const member2 = [person2];

person2.name = null; // this affects the array
console.log(member2); // [ { name: null } ]
