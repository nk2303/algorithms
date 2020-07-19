//Accept a variable numbers of arguments, check if duplicated.
//Ex: areThereDuplicates(1,2,3) => false
//Ex: areThereDuplicates(1,2,2) => true
//Ex: areThereDuplicates('a','b','c','a') => true

//new term: *arguments in js used.
//there is two pointers solutions

function areThereDuplicates() {
    if (!arguments) { return false }
    let hash = {};
    for (var e of arguments) {
        if (hash[e]) { 
            return true; 
          } else {hash[e] = 1}
    }
    return false
  }