const arr = [1, 2, 3, 5, 4];

// First solution - sort
// function largest(arr) {
//   return arr.sort((a, b) => b - a)[0];
// }

// Second solution
function largest(arr) {
  let max = -Infinity;

  for (let num of arr) {
    if (num > max) max = num;
  }

  return max;
}

const result = largest(arr);
console.log(result);
