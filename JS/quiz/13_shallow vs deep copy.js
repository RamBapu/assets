let obj1 = { a: 1, b: { c: 2 } };
let shallowCopy = Object.assign({}, obj1);
obj1.b.c = 3; // Nested objects will have same obj reference
console.log(shallowCopy); // { a: 1, b: { c: 3 } }
console.log(obj1); // { a: 1, b: { c: 3 } }
console.log(shallowCopy == obj1); // false - different object references
console.log(shallowCopy === obj1); // false - different object references

let obj2 = { a: 1, b: { c: 2 } };
let deepCopy = JSON.parse(JSON.stringify(obj2));
obj2.b.c = 3;
console.log(deepCopy); // { a: 1, b: { c: 2 } }
console.log(obj2); // { a: 1, b: { c: 3 } }

// Shallow copy of obj using ... spread operator and Object.assign
// Deep copy of obj using JSON parse (not suitable for circular referencing), structured clone, lodash (cloneDeep)

// Shallow copy of array using ... spread operator, slice, concat
// Deep copy of array using the above deep copy of objects
