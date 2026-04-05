const arr = [1, 3, 5, 2, 4, 3, 5];

// First solution - sort method
// const result = [...arr].sort((a, b) => a - b);

// Second solution - we can use bubbleSort, selectionSort, insertionSort, mergeSort
function bubbleSort(arr) {
  let n = arr.length;

  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]; // swapping without temp
      }
    }
  }

  return arr;
}

const result = bubbleSort(arr);
console.log(result);
