const arr = [1, 3, 4, 7];
const sum = 10;

function twoSum(arr, sum) {
  const map = new Map();
  for (let i = 0; i < arr.length; i++) {
    const diff = sum - arr[i];
    if (!map.has(diff)) {
      map.set(arr[i], i);
    } else {
      return [i, map.get(diff)];
    }
  }
}

const result = twoSum(arr, sum);
console.log(result);
