/**
 * @param {number[]} nums
 * @return {number}
 */
var dominantIndex = function (nums) {
    const max = Math.max(...nums)
    let index = nums.indexOf(max)
    nums.splice(index, 1)
    for (const iterator of nums) {
        if (iterator * 2 > max) {
            index = -1
        }
    }
    return index
};

console.log(dominantIndex([3, 6, 1, 0]))
console.log(dominantIndex([1,2,3,4]))
console.log(dominantIndex([1]))
console.log(dominantIndex([3, 6, 1, 0]))
console.log(dominantIndex([3, 6, 1, 0]))
