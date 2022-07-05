/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let firstIndex = 0;
  let secondIndex = numbers.length - 1;
  for (let i = 0; i <= numbers.length; i++) {
    const sum = numbers[firstIndex] + numbers[secondIndex];
    if (sum > target) secondIndex--;
    else if (sum < target) firstIndex++;
    else return [firstIndex + 1, secondIndex + 1];
  }
};
