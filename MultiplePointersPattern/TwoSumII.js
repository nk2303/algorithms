// Two Sum II - Input array is sorted

var twoSumII = function(numbers, target) {
    let left = 0;
    let right = numbers.length - 1;
    while (left < right){
        let total = numbers[left] + numbers[right]
        if (target < total){
            right--
        } else if (target > total) {
              left++     
        } else {
            return [left + 1, right + 1]
        }
    }
};