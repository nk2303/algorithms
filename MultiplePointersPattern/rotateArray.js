//Do not return anything, modify nums in-place instead.
//Given array, k . Rotate array to the right k times.

var rotate = (nums, k) => {
    while (k > 0) {
        let previous = nums[nums.length -1]
        for (let i = 0; i < nums.length; i++) {
            let current = nums[i];
            nums[i] = previous;
            previous = current;
        }
        k--;
    }
};