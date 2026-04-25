const obj = {
  name: "Ram",
  age: 29,
  state: "Tamil Nadu",
};

const strObj = JSON.stringify(obj);
console.log(strObj.name); // undefined
console.log(strObj); // {"name":"Ram","age":29,"state":"Tamil Nadu"}

const parsedStrObj = JSON.parse(strObj);
console.log(parsedStrObj); // { name: 'Ram', age: 29, state: 'Tamil Nadu' }

// Use case: storing it in local storage
// In local storage - store it as a string not an object
