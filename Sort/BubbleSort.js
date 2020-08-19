//Compare the two elements nxt to each other and swap.

const bubbleSort = (arr) => {
    for (let i = arr.length; i > 0; i--){
        for (let j = 0; j < i - 1; j++){
            //SWAP
        }
    }
}



//2 ways to swap:

const swap1 = (arr, i , j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const swap2 = (arr, i , j) => {
    [ arr[i], arr[j]] = [ arr[j], arr[i] ]
}