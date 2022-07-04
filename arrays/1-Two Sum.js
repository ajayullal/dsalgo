/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const indicesMap = {};
  const result = [];
  nums.some((num, index) => {
    const diff = target - num;
    if (typeof indicesMap[num] === "number") {
      result.push(indicesMap[num], index);
      return true;
    }
    indicesMap[diff] = index;
  });
  return result;
};
