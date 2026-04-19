const arr = [1, 2, 2, 3, 3, 4, 4, 5];

// Note we can do sort() method and do the same
function removeDuplicates(arr) {
  let j = 0; // pointer for non-duplicates

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] !== arr[j]) {
      j++;
      arr[j] = arr[i];
    }
  }

  arr.length = j + 1; // remove the non-duplicates
  return arr;
}

const result = removeDuplicates(arr);
console.log(result);

const arr2 = [2, 1, 3, 3, 5, 1, 4];

function removeDuplicates2(arr) {
  const seen = new Set();
  let i = 0;

  while (i < arr.length) {
    if (seen.has(arr[i])) {
      arr.splice(i, 1);
    } else {
      seen.add(arr[i]);
      i++;
    }
  }

  return arr;
}

const result2 = removeDuplicates2(arr);
console.log(result2);
