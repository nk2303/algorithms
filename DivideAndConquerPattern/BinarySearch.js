//Given array and a number, find that number's index in the array, return -1 if not found
function search(array, val) {
    let min = 0;
    let max = array.length - 0;
    while (min <= max){
        let middle = Math.floor((min+max)/2);
        if ( array[middle] < val ) {
            min = middle + 1;
        } else if ( array[middle] > val) {
            max = middle -1;
        } else { return middle }
    }
    return -1
}