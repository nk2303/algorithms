/**
 * A Game Studios is working on a new card game for F devices.
 * The player whose hand has the most pairs adding up to a target number wins.
 * They need an efficient and fair algorithm to shuffle the deck and deal each player
 * a hand, and a method for scoring a hand.
 *
 * P1 [2, 4, 5, 1, 8] Target 6 Score 2
 * P2 [2, 5, 1, 8, 9] Target 6 Score 1
 * P3 [2, 4, 2, 8, 6] Target 6 Score 1 
 * 
 * 5 cards for each player => very depend , an n amount of cards
 * and a target number 
 * cards => 1 -> any positive num
 * any number could be repeated any amount of time
 * [2, 4, 5, 1, 8] target is 6
 *     ^
 *if I am at 2, target - 2 O(n^2)
 * => hash = {
     target-2: index
 }
hash = {
     4: 0; // add the pair to the result
     2: 
 }
 [2, 4, 5, 1, 8]
 [[2,4],[5,1]]
 [2, 4, 2, 4, 5, 1, 8]
        ^
The hash will keep track of how many target - i value that it encountered
everytime we find a pair, we subtract the value of that key, so that we know that the card was taken.

[4, 2, 4]
[4, 2, 2]
result = 1
hash = {
    2: 0,
    4:
}

 **/
 
const findMaxPairs = (array, target) => {
    let hash = {};
    let result = 0;
    for (let i =0; i< array.length; i++) {
        // JS: 0 is false
        if (hash[array[i]]){
            // find a pair
            result++
            hash[array[i]] = hash[array[i]] - 1
        } else {
            hash[target - array[i]] = hash[target - array[i]] + 1 || 1 
        }
    }
    return result
}