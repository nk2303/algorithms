// You are given an n x n 2D matrix representing an image, 
// rotate the image by 90 degrees (clockwise).

// You have to rotate the image in-place, which means you have to modify the input 2D matrix directly. 
// DO NOT allocate another 2D matrix and do the rotation.

// Passing Leetcode 98%

var rotate = function(matrix) {
    let layer = 0;
    let len = matrix.length - 1;
    
    const sideRotate =(layer, i) => {
        let topleft = matrix[layer][layer + i];
        let topright = matrix[layer + i][len - layer];
        let bottomright = matrix[len - layer][len - layer - i];
        let bottomleft = matrix[len - layer - i][layer];
        
        let temp = topright;
        matrix[layer + i][len - layer] = topleft;
        matrix[layer][layer + i] = bottomleft;
        matrix[len - layer - i][layer] = bottomright;
        matrix[len - layer][len - layer - i] = temp;
    }
    
    while (layer < Math.floor(matrix.length/2)){
        for (let i = 0; i < len - (2*layer); i++){
            sideRotate(layer, i);
        }
        layer++;
    }
};