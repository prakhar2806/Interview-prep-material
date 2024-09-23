/**
 * @param {number[]} nums
 * @return {number}
 */
var getMin = function (nums) {
  let start = Infinity;
  for (let i = 0; i <= nums.length - 1; i++) {
    start = Math.min(start, nums[i]);
  }
  return start;
};

var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[left] === nums[right]) {
      return mid || nums.length;
    } else if (nums[mid] > nums[right]) {
      left = mid + 1;
    } else {
      right = mid > left ? mid - 1 : mid;
    }
  }

  return -1;
};

console.log(findMin([3, 1, 2]));
