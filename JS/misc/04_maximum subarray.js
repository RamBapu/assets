function maxSubArray(nums) {
  let maxSum = nums[0];
  let currentSum = nums[0];

  for (let i = 1; i < nums.length; i++) {
    // either extend previous subarray or start new
    currentSum = Math.max(nums[i], currentSum + nums[i]);

    // update global max
    maxSum = Math.max(maxSum, currentSum);
  }

  return maxSum;
}

const arr = [-2, 1, -3, 4, -1, 2, 1, -5, 4];
console.log(maxSubArray(arr)); // 6
