//This
function CountDown(num) {
    for(let i = num; i > 0 ; i--) {
        console.log(i);
    }
}
//Will become this
function CountDownRecursive(num) {
    if(num <= 0) {
        console.log("All done!");
        return;
    }
    console.log(num);
    num--;
    CountDownRecursive(num);
}