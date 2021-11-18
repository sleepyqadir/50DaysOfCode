/**
 * @param {number[]} nums
 * @return {number}
 */
var arrayPairSum = function (nums) {
    let sum = 0
    for (let index = 0; index < nums.length / 2; index++) {
        const element = nums[index];
        const element2 = nums[nums.length / 2 + index];
        console.log({ element, element2 }, Math.min(element, element2));
        sum += Math.min(element, element2)
    }
    return sum
};

console.log(arrayPairSum([6, 2, 6, 5, 1, 2]))