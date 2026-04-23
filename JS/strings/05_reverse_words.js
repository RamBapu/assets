const str = "Javascript is fun";

function reverseWords(str) {
  let arr = str.split(" ");
  let result = [];

  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i]);
  }

  return result.join(" ");
}

const result = reverseWords(str);
console.log(result);
