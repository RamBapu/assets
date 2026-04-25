const user = {
  name: "Ram",
  age: 29,
};

console.log(user); // { name: 'Ram', age: 29 }
console.log(user.name); // Ram

console.log(
  "---------------------------------------------------------------------------------------------------------",
);

user.name = "Vimal";
console.log(user); // { name: 'Vimal', age: 29 }

user["state"] = "Tamil Nadu";
console.log(user); // { name: 'Vimal', age: 29, state: 'Tamil Nadu' }
console.log(user["state"]); // Tamil Nadu

const { name } = user;
console.log(name); // Vimal

console.log(
  "---------------------------------------------------------------------------------------------------------",
);

const key = "name";
const value = "Ram";
const obj = {
  [key]: value,
};

console.log(obj); // { name: 'Ram' }

console.log(
  "---------------------------------------------------------------------------------------------------------",
);

const admin = {
  name: "Ram",
  age: 29,
  adminObj: {
    isAdmin: true,
  },
};

const {
  adminObj: { isAdmin },
} = admin;
console.log(isAdmin); // true
