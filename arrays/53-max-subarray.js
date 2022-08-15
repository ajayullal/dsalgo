/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
  let max = nums[0];
  let currentSum = nums[0];
  nums.slice(1).forEach((num) => {
    if (max === undefined) max = num;
    if (currentSum === undefined) currentSum = num;
    if (currentSum < 0) currentSum = num;
    else currentSum += num;
    if (currentSum > max) max = currentSum;
  });
  return max;
};
