const selectionSort = (arr) => {
    for(let i = 0; i < arr.length; i++){
        let lowest = i;
        for (let j = 0; j < arr.length; j++){
            if (arr[j] < arr[lowest]){ lowest = j}
        }
        //swap
        if(i !== lowest) {
            var temp = arr[i];
            arr[i] = arr[lowest];
            arr[lowest] = temp;
        }
    }
    return arr
}