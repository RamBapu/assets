let a = { greeting: "Hello" };
let b;

b = a; // Both objects have the same memory reference - copying the obj reference to other
b.greeting = "Hey";
console.log(a.greeting); // Hey
console.log(b.greeting); // Hey

console.log(
  "---------------------------------------------------------------------------------------------------------",
);

let c = { greeting: "Hello" };
let d;

d = c; // Both objects have the same memory reference - copying the obj reference to other
c.greeting = "Hey";
console.log(c.greeting); // Hey
console.log(d.greeting); // Hey

console.log(
  "---------------------------------------------------------------------------------------------------------",
);
