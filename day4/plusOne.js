/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
    for (let index = digits.length - 1; index >= 0; index--) {
        if (digits[index] < 9) {
            digits[index] = digits[index] + 1
            return digits
        }
        else {
            digits[index] = 0
        }
    }
    digits.unshift(1)
    return digits
};

console.log(plusOne([1, 2, 3]))
console.log(plusOne([9]))