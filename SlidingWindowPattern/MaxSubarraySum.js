//Given an array and an integer n, return the max sum of n consecutive value in that array.
//example: [1,2,3,4,2,3,5,2], 3

//Solution:
//Add the first 3 element, then save the sum, add the number after, and subtract the number before
function MaxSubarraySum(arr, n) {
    let maxSum = 0;
    let tempSum = 0;
    for ( let i = 0; i < n; i++) {
        maxSum += arr[i]
    }
    for ( let i = n; i < arr.length; i++) {
        tempSum = maxSum - arr[i-n] + arr[i]
        maxSum = Math.max(tempSum, maxSum)
    }
    return maxSum
}