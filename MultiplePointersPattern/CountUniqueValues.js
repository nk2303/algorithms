//count how many different values in the given SORTED array

//My solution: Make object with a counter that counts everytime new key add to object.
function countUniqueValues(arr){
    let counter = { 'count': 0 };
    for (let e of arr) {
      if (!counter[e]) {
        counter[e] = 1;
        counter['count']++;
      } else { counter[e] += 1 }
    }
    return counter['count']
}

//Better solution without using hash as data:

function countUniqueValues(arr){
    if (arr.length === 0) {return 0}
    let i = 0;
    for ( let j = 1; j < arr.length; j++) {
        if (arr[i] !== arr[j]) {
            arr[i] = arr[j];
            i++;
        } else {j++}
        
    }
    return i+1;
}