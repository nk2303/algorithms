//Given a SORTED array, find the first pair with sum = 0
//Examples:
//sumZero([-3,-2,-1,0,1,2,3]) => [-3,3]
//sumZero([-2,0,1,3]) => undefined

function sumZero(arr) {
    let left = 0;
    let right = arr.length -1
    while (left < right) {
        let sum = arr[left] + arr[right]
        if (sum === 0) {return [arr[left], arr[right]]}
        else if (sum > 0) { right-- }
        else { left++ }
    }
}