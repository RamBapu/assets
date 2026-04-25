const arr = [1, 2, 3, 4, 5, 6, 7];
const num = 3;

function rotate(arr, num) {
  const size = num % arr.length;
  if (size === 0) return arr;

  const rotated = arr.splice(arr.length - size);

  return [...rotated, ...arr];
}

const result = rotate(arr, num);
console.log(result);
