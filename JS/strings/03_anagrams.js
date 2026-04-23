const str1 = "listen";
const str2 = "silent";

// First solution - split,sort and join
// function isAnagram(str1, str2) {
//   if (str1.length !== str2.length) return false;
//   return str1.split("").sort().join("") === str2.split("").sort().join("");
// }

// Second solution - map
function isAnagram(str1, str2) {
  if (str1.length !== str2.length) return false;
  const map = new Map();

  for (let char of str1) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  for (let char of str2) {
    if (!map.get(char)) return false;
    map.set(char, map.get(char) - 1);
  }

  return true;
}

const result = isAnagram(str1, str2);
console.log(result);
