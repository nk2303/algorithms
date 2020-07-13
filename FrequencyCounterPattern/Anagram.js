//My solution: Still need to loop through the counter object and make sure everything is 0

function validAnagram(str1, str2){
    let counter = {};
    for (let e of str1){
        counter[e] = ( counter[e] || 0 ) + 1
    }
    for (let e of str2) {
        if (!(e in counter)) { return false; }
        else { 
          counter[e] -= 1
        }
    }
    for ( let e in counter) {
      if (counter[e] !== 0) { return false;}
    } 
    return true
}


//Solution:
//By making the string length is equal, no need to loop through and check everything again.

function validAnagram(str1, str2){
    let counter = {};
    if (str1.length !== str2.length) { return false }
    for (let e of str1){
        counter[e] = ( counter[e] || 0 ) + 1
    }
    for (let i = 0; i < str2.length; i++) {
      let letter = str2[i]
        if (!counter[letter]) { return false; }
        else { 
          counter[letter] -= 1
        }
    }
    return true
}

console.log(validAnagram('awesome','awesom'))

