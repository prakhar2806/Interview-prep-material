//In this approach, the element is always searched in the middle of a portion of an array.
// always applied on sorted array otherwise we would need to sort it first

// Sorted binary search is done at O-Log(n)
// if unsorted  binary search is done at n-Log(n)

//Binary search is done by divide and conquor mechanism
/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0; //0
  let right = nums.length - 1; //5
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (nums[mid] < target) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }
  return -1;
};

console.log(search([-1, 0, 3, 5, 9, 12], 9));
