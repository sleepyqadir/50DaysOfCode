function findNumbers(nums) {
    var counter = 0;
    nums.forEach(function (num) {
        num.toString().length % 2 === 0 ? (counter += 1) : counter;
    });
    console.log({ counter: counter });
    return counter;
}
var answer = findNumbers([12, 345, 2, 6, 7896]);
