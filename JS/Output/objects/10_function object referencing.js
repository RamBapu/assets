function changeAge(person) {
  person.age = 25;
  return person;
}

const personObj = {
  name: "Ram",
  age: 29,
};

const personModifiedAge = changeAge(personObj);
console.log(personObj); // { name: 'Ram', age: 25 }
console.log(personModifiedAge); // { name: 'Ram', age: 25 }
