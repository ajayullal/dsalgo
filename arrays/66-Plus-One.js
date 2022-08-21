/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let numToAdd = 1;
  const length = digits.length;

  for (let i = digits.length - 1; i >= 0; i--) {
    const result = digits[i] + numToAdd;

    if (result === 10) {
      if (i === 0) {
        digits[i] = 1;
        digits.push(0);
      } else digits[i] = 0;
    } else {
      digits[i] = result;
      numToAdd = 0;
    }
  }

  return digits;
};
