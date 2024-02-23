/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  const res = [];
  const sortedNums = nums.sort((a, b) => a - b);
  const target = 0;

  for (let i = 0; i < sortedNums.length; i += 1) {
    if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;

    let l = i + 1;
    let r = sortedNums.length - 1;

    while (l < r) {
      const threeSum = sortedNums[i] + sortedNums[l] + sortedNums[r];
      if (threeSum < target) l++;
      else if (threeSum > target) r--;
      else {
        res.push([sortedNums[i], sortedNums[l], sortedNums[r]]);
        l++;
        while (sortedNums[l] === sortedNums[l - 1]) l++;
      }
    }
  }
  return res;
};
