"use strict";
// code
function findMaxConsecutiveOnes(nums) {
    var max = 0;
    var counter = 0;
    for (var _i = 0, nums_1 = nums; _i < nums_1.length; _i++) {
        var iterator = nums_1[_i];
        if (iterator === 1) {
            counter++;
        }
        else {
            if (counter > max) {
                max = counter;
            }
            counter = 0;
        }
    }
    if (max > counter) {
        return max;
    }
    return counter;
}
// optimized code
function findMaxConsecutiveOnesOptimized(nums) {
    return Math.max.apply(Math, nums
        .join('')
        .split('0')
        .map(function (s) { return s.length; }));
}
var max = findMaxConsecutiveOnes([0, 1, 1, 1, 1, 1]);
console.log({ max: max });
max = findMaxConsecutiveOnesOptimized([0, 1, 0, 1, 1, 1]);
console.log({ max: max });
max = findMaxConsecutiveOnes([0, 1, 0, 0, 1, 1]);
console.log({ max: max });
max = findMaxConsecutiveOnes([1, 1, 1, 0, 1, 1]);
console.log({ max: max });
