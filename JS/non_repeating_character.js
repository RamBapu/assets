const str = "aabbcdde";

// Using indexOf && lastIndexOf
// function character(str) {
//   for (let char of str) {
//     if (str.indexOf(char) === str.lastIndexOf(char)) return char;
//   }
// }

function character(str) {
  const map = new Map();
  for (let char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let char of str) {
    if (map.get(char) === 1) return char;
  }

  return -1;
}

const result = character(str);
console.log(result);
