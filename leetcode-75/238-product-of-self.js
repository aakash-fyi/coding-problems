// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.




/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let prefix = new Array(nums).fill(1);
    

    // 
    record = []

    for(let i = 0; i< nums.length; i++){
        record[i] = prefix
        prefix = nums[i]*prefix 
    }
    let suffix = 1
     for(let i = nums.length -1; i >= 0; i--){
        record[i] *= suffix
        suffix *= nums[i] 
    }
    return record 


};