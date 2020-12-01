// Suppose an array of length n sorted in ascending order is rotated between 1 and n times.
// For example, the array nums = [0,1,2,4,5,6,7] might become:

// [4,5,6,7,0,1,2] if it was rotated 4 times.
// [0,1,2,4,5,6,7] if it was rotated 7 times.

// Given the sorted rotated array nums, return the minimum element of this array.

// Example 1:
// Input: nums = [3,4,5,1,2]
// Output: 1

// Example 2:
// Input: nums = [4,5,6,7,0,1,2]
// Output: 0

// Example 3:
// Input: nums = [11,13,15,17]
// Output: 11

var findMin = function(nums) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right){
        let middle = Math.floor( (left + right)/2)
        if (left === middle){
            return Math.min(nums[right],nums[left])
        }
        if(nums[left]< nums[middle] && nums[right] < nums[middle]){
           left = middle;
        } else {
            right = middle;
        }
    }
};