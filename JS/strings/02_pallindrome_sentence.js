const str = "A man a plan a canal Panama";

function isPallindrome(str) {
  let modifiedStr = str.toLowerCase().split(" ").join(""); // change to lowercase and removing spaces
  return modifiedStr === modifiedStr.split("").reverse().join("");
}

const result = isPallindrome(str);
console.log(result);
