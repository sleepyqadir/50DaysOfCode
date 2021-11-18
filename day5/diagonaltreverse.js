/**  * @param {number[][]} mat  * @return {number[]}  */



var findDiagonalOrder = function (mat) {
    let i = 0
    let j = 0

    for (var iterator = 0; iterator < mat.length * mat[0].length; iterator++) {
        console.log(mat[i][j]);
    }
    return mat
};


console.log(findDiagonalOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))


// [1, 2, 3]
// [4, 5, 6]
// [7, 8, 9]