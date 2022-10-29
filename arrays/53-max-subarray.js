/**
 * @param {number[]} nums
 * @return {number}
 */
 var maxSubArray = function(nums) {
  let max = nums[0], currentSum = nums[0];
  
  for(let i=1; i< nums.length; i++){
      if(currentSum < 0) currentSum = nums[i];
      else currentSum += nums[i];
      if(currentSum > max) max = currentSum;
  }
  
 return max;
};