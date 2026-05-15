// Longest substring length without repeating characters

// Sliding window
function longestSubstr(str) {
  let set = new Set();
  let longestSubstrSet = new Set();
  let left = 0; // start position of sliding window
  let maxLength = 0;

  // right - end position of sliding window
  for (let right = 0; right < str.length; right++) {
    while (set.has(str[right])) {
      set.delete(str[left]);
      left++;
    }
    set.add(str[right]);
    maxLength = Math.max(maxLength, right - left + 1);
  }
  return maxLength;
}

console.log(longestSubstr("aeebcdeacbb"));

// If we need the longest substring
// instead of max - do this

//  if (right - left + 1 > maxLength) {
//       maxLength = right - left + 1;
//       start = left;
//     }

// return str.slice(start, start + maxLength)
