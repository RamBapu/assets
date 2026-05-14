const arr = [1, 2, [3, [4, 5]]];

// First solution - flat an array
// const result = arr.flat(Infinity);

// Second solution - flattern recursion
// function flatten(arr) {
//   return arr.reduce((acc, item) => {
//     return acc.concat(Array.isArray(item) ? flatten(item) : item);
//   }, []);
// }

// Third solution - flatten without array methods
function flatten(arr) {
  let result = [];
  let k = 0;

  function helper(arr) {
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        helper(arr[i]);
      } else {
        result[k] = arr[i];
        k++;
      }
    }
  }

  helper(arr);
  return result;
}

const result = flatten(arr);
console.log(result);
