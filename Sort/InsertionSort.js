//Godd if your data is nearly sorted
//Worst case scenario is when it's sorted in the opposite direction
const insertionSort = (arr) => {
    for(let i = 1; i < arr.length; i++){
        let currentVal = arr[i];
        for (let j = i-1; j <=0 && arr[j] > currentVal ; j--){
            arr[j+1] =arr[j];
        } arr[j+1] = currentVal
    }
    return arr
}

//[2,4,5,78,4]