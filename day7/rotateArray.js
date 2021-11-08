/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
 var rotate = function (nums, k) {
    for (var i = 0; i < k; i++) {
        const value = nums.pop()
        nums.unshift(value)
    }
};
console.log(rotate([1, 2, 3, 4, 4, 5, 5], 5))