const str = "RamBapu";

// First solution - using for
// function reverseStr(str) {
//   let result = "";
//   for (let i = str.length - 1; i >= 0; i--) {
//     result = result.concat(str[i]); // result += str[i]
//   }

//   return result;
// }

// Second solution - using two pointer approach
function reverseStr(str) {
  let arr = str.split("");
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }

  return arr.join("");
}

const result = reverseStr(str);
console.log(result);
