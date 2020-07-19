//Given 2 num, return true if they have same frequency number, else false;
//Ex: 
// sameFrequency(128,821) => true
// sameFrequency(12,821) => false

function sameFrequency(num1, num2){
    let str1 = num1.toString();
    let str2 = num2.toString();
    if (str1.length !== str2.length) { return false}
    else {
        let h1 = {};
        let h2 = {};
        for (let i = 0; i < str1.length; i++) {
            h1[str1[i]] = (h1[str1[i]] || 0) + 1;
            h2[str2[i]] = (h2[str2[i]] || 0) + 1;
        }
        for (let key in h1) {
          if ( h1[key] !== h2[key] ) { return false }
        }
  
    }
    return true
  }