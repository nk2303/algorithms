//Given a string s and a string t, check if s is subsequence of t.
//Ex: 
//Input: s = "abc", t = "ahbgdc"
//Output: true

var isSubsequence = function(s, t) {
    let anchor = 0;
    let max = s.length
    if ( anchor === max ) { return true };
    for (let i = 0; i < t.length; i++) {
        if ( t[i] === s[anchor]) {
            anchor++ ;
            if ( anchor === max ) { return true }
        }
    }
    return false
};