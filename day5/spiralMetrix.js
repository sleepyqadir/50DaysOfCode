/**  * @param {number[][]} mat  * @return {number[]}  */



var spiralOrder = function (mat) {
    let i = 0
    let j = 0
    let iterator = 0
    let way = "right"

    while (mat.length * mat[0].length > iterator) {
        if (j < mat.length && way === "right") {
            console.log("got right", mat[i][j])
            j++
        }
        else if (way === "right") {
            j--
            i++
            console.log("go down", mat[i][j])
            way = "down"
        }
        else if (way === "down") {
            console.log("going left")
            way = "left"
        }
        else if (way === "left") {
            console.log("go left")
        }
        iterator++
    }
    return mat
};


console.log(spiralOrder([[1, 2, 3], [4, 5, 6], [7, 8, 9]]))


// [1, 2, 3]
// [4, 5, 6]
// [7, 8, 9]