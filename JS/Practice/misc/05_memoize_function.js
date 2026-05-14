function memoize(fn) {
  const map = new Map();

  return function (...args) {
    const key = JSON.stringify(args);
    if (map.has(key)) return map.get(key);

    const result = func.apply(this, args);
    map.set(key, result);
    return result;
  };
}

const add = (a, b) => a + b;
const memoizedAdd = memoize(add);
const result1 = memoizedAdd(2, 3);
// const result2 = memoizedAdd(2, 3);
console.log(result1);
// console.log(result2);
