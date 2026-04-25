const arr = [1, 3, 0, 12, 0];

// First solution - using filter and fill
// function moveZeros(arr) {
//   const nonZeros = arr.filter((num) => num !== 0);
//   const zeros = new Array(arr.length - nonZeros.length).fill(0);

//   return [...nonZeros, ...zeros];
// }

// Second solution - two pointer approach
function moveZeros(arr) {
  let j = 0; // position of non-zero

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== 0) {
      [arr[i], arr[j]] = [arr[j], arr[i]];
      j++;
    }
  }

  return arr;
}

const result = moveZeros(arr);
console.log(result);
