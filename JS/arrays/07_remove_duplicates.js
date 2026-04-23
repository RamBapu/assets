const arr = [2, 1, 3, 3, 5, 1, 4];

// First solution - Using set
// function removeDuplicates(arr) {
//   return [...new Set(arr)];
// }

// Second solution - Using reduce
// function removeDuplicates(arr) {
//   const unique = arr.reduce((acc, item) => {
//     if (!acc.includes(item)) {
//       acc.push(item);
//     }
//     return acc;
//   }, []);

//   return unique;
// }

// Third solution - Using map
function removeDuplicates(arr) {
  const map = new Map();
  for (let num of arr) {
    map.set(num, true);
  }
  const unique = [...new Set(map.keys())];
  return unique;
}

const result = removeDuplicates(arr);
console.log(result);
