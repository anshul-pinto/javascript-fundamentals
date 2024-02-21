// Given an integer array nums and an integer val, remove all occurrences
// of val in nums in-place. The order of the elements may be changed.
// Then return the number of elements in nums which are not equal to val.

// Consider the number of elements in nums which are not equal to val be k,
// to get accepted, you need to do the following things:

// Change the array nums such that the first k elements of nums contain the
// elements which are not equal to val. The remaining elements of nums are not important as well as the size of nums.
// Return k.

// Example 1:

// Input: nums = [3,2,2,3], val = 3
// Output: 2, nums = [2,2,_,_]
// Explanation: Your function should return k = 2, with the first two elements of nums being 2.
// It does not matter what you leave beyond the returned k (hence they are underscores).
// Example 2:

// Input: nums = [0,1,2,2,3,0,4,2], val = 2
// Output: 5, nums = [0,1,4,0,3,_,_,_]
// Explanation: Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.
// Note that the five elements can be returned in any order.
// It does not matter what you leave beyond the returned k (hence they are underscores).

var removeElement = function (nums, val) {
  let idxToFill = 0;
  let cur = 0;

  while (cur < nums.length) {
    if (nums[cur] !== val) {
      nums[idxToFill] = nums[cur];
      idxToFill++;
    }
    cur++;
  }
  return idxToFill;
};

// [0,1,2,2,3,0,4,2] val = 2
// 0 not equal to 2 [0,1,2,2,3,0,4,2] idxToFill=0++ cur=0++
// 1 not equal to 2 [0,1,2,2,3,0,4,2] idxToFill=1++ cur=1++
// 2 equal [0,1,2,2,3,0,4,2] idxToFill=2 cur=2++
// 2 equal [0,1,2,2,3,0,4,2] idxToFill=2 cur=3++
// 3 not equal to 2 [0,1,3,2,2,0,4,2] idxToFill=2++ cur=4++
// 0 not equal to 2 [0,1,3,0,2,2,4,2] idxToFill=3++ cur=5++
// 4 not equal to 2 [0,1,3,0,4,2,2,2] idxToFill=4++ cur=6++

// return idxToFill = 5
