// has to be sorted 2d matrix
// The first integer of each row is greater than the last integer of the previous row.
// First find which nested array it belongs to and then apply bindary search

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  for (let item of matrix) {
    if (target >= item[0] && target <= item[item.length - 1]) {
      console.log("item exists in ", item);
      let left = 0;
      let right = item.length - 1;
      while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        if (item[mid] === target) {
          console.log("true", mid);
          return true;
        } else if (item[mid] < target) {
          left = mid + 1;
        } else {
          right = mid - 1;
        }
      }
    }
  }
  return false;
};

const arr = [
  // [1]
  [1, 3, 5, 7],
  [10, 11, 16, 20],
  [23, 30, 34, 60],
];
searchMatrix(arr, 1);
