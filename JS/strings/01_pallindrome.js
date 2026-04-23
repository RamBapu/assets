const str = "madam";

// First solution - split and join
// const result = str.split("").reverse().join("");
// console.log(result === str);

// Second solution - using while
function isPallindrome(str) {
  let left = 0;
  let right = str.length - 1;

  while (left < right) {
    if (str[left] !== str[right]) return false;
    left++;
    right--;
  }

  return true;
}

const result = isPallindrome(str);
console.log(result);
