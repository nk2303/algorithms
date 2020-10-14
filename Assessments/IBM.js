function betterCompression(s) {
    
    //First, construct an in-order alphabet hash with only letters in s .
    let hash = {};
    var a = 'a'.charCodeAt(0), z = 'z'.charCodeAt(0);
    for (; a <= z; ++a) {
        let letter = String.fromCharCode(a)
        if (s.includes(letter)){
            hash[letter] = 0
        }
    }
    
    //Loop through s, find the amount, add to hash.
    for (let i = 0; i< s.length - 1; i++){
        if (/^[a-z]+$/.test(s[i])){
            let num = 0;
            let current = i
            for (let f = i + 1; f < s.length; f++){
                if(/^[0-9]+$/.test(s[f])){
                    num = (num* 10) + parseInt(s[f])
                } else {
                    i = f - 1
                    break
                }
            }
            hash[s[current]] = hash[s[current]] + num
        }
    }
    
    //Loop through hash, construct new string based on hash .
    let result = ""
    for (let i in hash){
        result += i
        result += hash[i]
    }
    return result
}


function minDeletions(arr) {
    
    let result = 0
    let lis = []
    for (let i = 0; i < arr.length; i++){
        for (let j = 0; j < i; j++ ){
            if ( arr[i] > arr[j] && lis[i] < lis[j] + 1) 
            lis[i] = lis[j] + 1; 
        }
    }
    for (let i = 0; i < arr.length; i++ ) {
        if (result < lis[i]) {
            result = lis[i]; 
        }
    }
    
    return result
    
    // let max = 0;
    // for (let i = 0; i < arr.length; i++){
    //     if( arr[i] > arr[i + 1]){
    //         max++
    //     }
    // }
    // if (max <= 1){
    //     return 0
    // } else {
    //     return max - 1
    // }
}
    

function minDeletions(arr) {
    //find the longest increasing sequence
    const tails = [];
    tails[0] = arr[0];
    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < tails[0]) {
            tails[0] = arr[i];     
        } else if(arr[i] > tails[tails.length-1]) {
            tails.push(arr[i]);
        } else {
            let l = 0;
            let r = tails.length-1;
            while(l < r) {
                const mid = (l+r)/2 >> 0;
                if(tails[mid] >= arr[i]) {
                    r = mid
                } else {
                    l = mid + 1;
                }
            }
            tails[r] = arr[i];
        }
    }
    //then subtract array length with it
    let max = tails.length
    let result = arr.length - max
    if (result <= 1){
        return 0
    } else {
        return result - 1
    }
    
}