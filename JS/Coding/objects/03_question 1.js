// Create a function for obj that multiples all numeric values of obj by 2

let obj = {
  a: 100,
  b: 200,
  title: "This is numbers",
};

multiplyBy2(obj);

function multiplyBy2(obj) {
  for (let key in obj) {
    if (typeof obj[key] === "number") {
      obj[key] = obj[key] * 2;
    }
  }
  console.log(obj);
}
