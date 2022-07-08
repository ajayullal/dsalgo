/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
  let nums1Ptr = m - 1,
    nums2Ptr = n - 1;

  for (let i = nums1.length - 1; i >= 0; i--) {
    if (nums1[nums1Ptr] >= nums2[nums2Ptr] || nums2Ptr < 0) {
      nums1[i] = nums1[nums1Ptr];
      nums1Ptr--;
    } else if (nums2[nums2Ptr] > nums1[nums1Ptr] || nums1Ptr < 0) {
      nums1[i] = nums2[nums2Ptr];
      nums2Ptr--;
    }
  }

  return nums1;
};
