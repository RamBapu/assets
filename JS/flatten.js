const arr = [1, 2, [3, [4, 5]]];

// First solution - flat an array
// const result = arr.flat(Infinity);

// Second solution - flattern recursion
function flatten(arr) {
  return arr.reduce((acc, item) => {
    return acc.concat(Array.isArray(item) ? flatten(item) : item);
  }, []);
}

const result = flatten(arr);
console.log(result);
