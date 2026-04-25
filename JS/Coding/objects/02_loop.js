const obj = {
  name: "Ram",
  age: 29,
  state: "Tamil Nadu",
};

for (const key in obj) {
  console.log(key); // name age state
}

for (const key in obj) {
  console.log(obj[key]); // Ram 29 Tamil Nadu
}

console.log(
  "---------------------------------------------------------------------------------------------------------",
);

console.log(Object.keys(obj)); // ['name' , 'age' , 'state']
console.log(Object.values(obj)); // ['Ram' , '29' , 'Tamil Nadu']
