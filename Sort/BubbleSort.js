//Compare the two elements nxt to each other and swap.
//2 ways to swap:

const swap1 = (arr, i , j) => {
    const temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const swap2 = (arr, i , j) => {
    [ arr[i], arr[j]] = [ arr[j], arr[i] ]
}