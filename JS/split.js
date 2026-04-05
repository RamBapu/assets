const arr = [1, 2, 3, 4, 5];
const size = 2;

function splitArr(arr, size) {
  let result = [];

  for (let i = 0; i < arr.length; i = i + size) {
    result.push(arr.slice(i, i + size));
  }

  return result;
}

const result = splitArr(arr, size);
console.log(result); // [ [ 1, 2 ], [ 3, 4 ], [ 5 ] ]
