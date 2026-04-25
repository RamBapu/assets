const str = "hello";

function frequency(str) {
  const map = new Map();
  for (let char of str) {
    map.set(char, (map.get(char) || 0) + 1);
  }

  return map;
}

const result = frequency(str);
console.log(result);
