//Accept a variable numbers of arguments, check if duplicated.
//Ex: areThereDuplicates(1,2,3) => false
//Ex: areThereDuplicates(1,2,2) => true
//Ex: areThereDuplicates('a','b','c','a') => true

//new term: *arguments in js used.
//there is frequency counter solutions

function areThereDuplicates(...args) {
    args.sort((a,b) => a > b);
    let start = 0;
    let next = 1;
    while(next < args.length){
        if(args[start] === args[next]){
            return true
        }
        start++
        next++
    }
    return false
  }