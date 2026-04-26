// const obj = {
//     Alice: ['JavaScript','Java'],
//     Bob: ['Java','Python'],
//     Charlie: ['Java','Selenium'],
//     Diana: ['JavaScript']
// }

// result(['JavaScript']) = ['Alice','Diana']

// Solution
function result(languageArr) {
  let result = [];
  for (let people in obj) {
    if (obj[people].includes(...languageArr)) {
      result.push(people);
    }
  }
  return result;
}

const obj = {
  Alice: ["JavaScript", "Java"],
  Bob: ["Java", "Python"],
  Charlie: ["Java", "Selenium"],
  Diana: ["JavaScript"],
};

console.log(result(["Java"]));
