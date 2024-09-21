//  https://leetcode.com/problems/koko-eating-bananas/description/


function findMax(v) {
  let maxi = -Infinity;
  let n = v.length;
  // Find the maximum
  for (let i = 0; i < n; i++) {
    maxi = Math.max(maxi, v[i]);
  }
  return maxi;
}

function calculateTotalHours(v, hourly) {
  let totalH = 0;
  let n = v.length;
  // Find total hours
  for (let i = 0; i < n; i++) {
    totalH += Math.ceil(v[i] / hourly);
  }
  return totalH;
}

function minimumRateToEatBananas(v, h) {
  let low = 1;
  let high = findMax(v);

  // Apply binary search
  while (low <= high) {
    let mid = Math.floor((low + high) / 2);
    let totalH = calculateTotalHours(v, mid);
    if (totalH <= h) {
      high = mid - 1;
    } else {
      low = mid + 1;
    }
  }
  return low;
}

let v = [7, 15, 6, 3];
let h = 8;
let ans = minimumRateToEatBananas(v, h);
console.log("Koko should eat at least " + ans + " bananas/hr.");

// console.log(minEatingSpeed([30, 11, 23, 4, 20], 6));
