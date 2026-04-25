const user = {
  name: "Ram",
  age: 29,
  health: 90,
};

const data = JSON.stringify(user, ["name", "age"]);
console.log(data); // {"name":"Ram","age":29}
