const str = "hello word";

function removeDuplicates(str) {
  let result = "";
  const map = new Map();
  for (let char of str) {
    if (!map.get(char)) result = result.concat(char);
    map.set(char, true);
  }

  return result;
}

const result = removeDuplicates(str);
console.log(result);
