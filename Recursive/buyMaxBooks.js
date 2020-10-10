//wrong solution

function budgetShopping(n, bundleQuantities, bundleCosts) {
    console.log("here is n : ",n)
    if(Math.min(...bundleCosts) > n) {
      console.log("it stop here", n)
        return 0;
    }
    
    let maxBooks = 0;
    let remainingMoney = n;
    for ( let i = 0 ; i < bundleCosts.length; i++) {
        let maxBundleCanBuy = Math.floor(n/bundleCosts[i])
        console.log({maxBundleCanBuy, totalBooks :maxBundleCanBuy*bundleQuantities[i], cost:bundleCosts[i]})
        if (maxBundleCanBuy*bundleQuantities[i] > maxBooks) {
            maxBooks = maxBundleCanBuy*bundleQuantities[i];
            remainingMoney = n - maxBundleCanBuy*bundleCosts[i];
            console.log({i, maxBundleCanBuy,maxBooks ,remainingMoney})
        }
    }
    maxBooks += budgetShopping(remainingMoney, bundleQuantities, bundleCosts)
    
    
    return maxBooks
}
let n = 29
var bundleQuantities = [ 14, 5, 4, 14, 8, 13, 5, 19, 8, 18, 1, 1, 15, 18, 16, 17, 14, 15, 6, 10, 20, 19, 9, 10, 17, 5, 12, 20, 8, 5, 18, 8 ]
const bundleCosts = [ 187, 142, 96, 198, 108, 48, 44, 176, 9, 15, 87, 109, 176, 147, 29, 16, 80, 98, 193, 167, 67, 191, 18, 183, 68, 69, 65, 19, 16, 114, 143, 157 ]
budgetShopping(n, bundleQuantities, bundleCosts)
//the answer was actually 28
//cost 9, 8 books per bundle, 29/9 = 3, 3*8 = 24

var bundleQuantities2 = 
[ 8, 18, 16, 17, 9, 20, 8 ]
const bundleCosts2 = 
[ 9, 15, 29, 16, 18, 19, 16 ]