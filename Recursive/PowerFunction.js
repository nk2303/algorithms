//Write a function similar to Math.pow(base, exponent) with recursion
// power(2,0) // 1
// power(2,2) // 4
// power(2,4) // 16

function power(a,b){
    if (b === 0){ return 1 }
    b = b - 1
    a = a*power(a,b)
    return a
}