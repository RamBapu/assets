Array.prototype.multiply = function () {
  return this.map((el) => el * 5);
};

const arr = [1, 2, 3, 4, 5];
console.log(arr.multiply());
