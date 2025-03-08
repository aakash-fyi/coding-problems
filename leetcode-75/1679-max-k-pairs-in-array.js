// You are given an integer array nums and an integer k.

// In one operation, you can pick two numbers from the array whose sum equals k and remove them from the array.

// Return the maximum number of operations you can perform on the array.
/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function (nums, k) {
    let left = 0
    let right = nums.length - 1
    let count = 0
    nums.sort((a,b)=>a-b)
    while (left < right) {
        if ((nums[left] + nums[right]) === k) {
            count += 1
            left++
            right--
        } else if ((nums[left] + nums[right]) < k) {
            if (nums[left] < nums[right]) {
                left++
            } else {
                right--
            }

        } else if ((nums[left] + nums[right]) > k) {
            if (nums[left] < nums[right]) {
                right--
            } else {
                left++
            }

        }
    }
    return count
};