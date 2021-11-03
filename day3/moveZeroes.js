/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums) {
    var zeros = [];
    for (var index = 0; index < nums.length; index++) {
        console.log(nums[index]);
        if (nums[index] === 0) {
            nums.splice(index, 1);
            zeros.push(0);
            index--;
        }
    }
    for (var i = 0; i < zeros.length; i++) {
        nums.push(0);
    }
}
var num = [0, 0, 1];
console.log(moveZeroes(num));
console.log({ num: num });
