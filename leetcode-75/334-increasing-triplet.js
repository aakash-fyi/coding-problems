// Given an integer array nums, return true if there exists a triple of indices (i, j, k) such that i < j < k and nums[i] < nums[j] < nums[k]. If no such indices exists, return false.

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var increasingTriplet = function (nums) {
    let small = undefined;  // First smallest number
    let mid = undefined;    // Second smallest number

    for (let i = 0; i < nums.length; i++) {
        if (small === undefined || nums[i] <= small) {
            small = nums[i];  // Update `small` if we find a smaller value
        } else if (mid === undefined || nums[i] <= mid) {
            mid = nums[i];    // Update `mid` if it's greater than `small` but still the second smallest
        } else {
            // If we find a number greater than both `small` and `mid`, return true
            return true;
        }
    }

    return false;
};