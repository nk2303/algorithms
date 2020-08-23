//Given binary tree, return the maximum depth.
//    3
//   / \
//  9  20
//    /  \
//   15   7
var maxDepth = function(root) {
    if (!root) { return 0 }
    let left = maxDepth(root.left)
    let right = maxDepth(root.right)
    return Math.max(left, right) + 1
};