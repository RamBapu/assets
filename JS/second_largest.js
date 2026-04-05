const arr = [2, 3, 5, 1, 4];

// First solution - using sort
// const result = [...new Set(arr)].sort((a, b) => b - a)[1];

// Second solution
function secondLargest(arr) {
  let first = -Infinity;
  let second = -Infinity;

  for (let num of arr) {
    if (num > first) {
      second = first;
      first = num;
    } else if (num !== first && num > second) {
      second = num;
    }
  }

  return second;
}

const result = secondLargest(arr);
console.log(result);
