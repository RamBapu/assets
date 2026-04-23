let obj1 = { a: 1, b: { c: 2 } };
let shallowCopy = Object.assign({}, obj1);
obj1.b.c = 3;
console.log(shallowCopy);
console.log(obj1);

let obj2 = { a: 1, b: { c: 2 } };
let deepCopy = JSON.parse(JSON.stringify(obj2));
obj2.b.c = 3;
console.log(deepCopy);
console.log(obj2);
