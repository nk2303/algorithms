//Use objects or sets to collect values/frequencies of values
//This can often avoid the nested loop or O(n^2) with arrays/strings.

//Given two arrays, check if the second array's elements are the first array's squared values.
//Examples:
//same([1,2,3], [4,1,9]) return true
//same([1,2,1], [4,4,1]) return false

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    let frequencyCount1 = {};
    let frequencyCount2 = {};
    for (let e of arr1) {
        frequencyCount1[e] = ( frequencyCount1[e] || 0 ) + 1;
    }
    for (let e of arr2) {
        frequencyCount2[e] = ( frequencyCount2[e] || 0 ) + 1;
    }
    for (let key in frequencyCount1) {
        if ( !(key**2 in frequencyCount2) ){ return false };
        if ( frequencyCount1[key] !== frequencyCount2[key]){ return false };
    }
    return true
}

console.log(same([1,2,3,2,5],[9,1,4,4,11]))

// Notes: two seperated loops are better than nested loops.