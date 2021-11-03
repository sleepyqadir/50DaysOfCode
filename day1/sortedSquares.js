function sortedSquares(nums) {
    var squares = nums.map(function (n) {
        return n * n;
    });
    var counter = 0;
    for (var iteratorX = 0; iteratorX < squares.length; iteratorX++) {
        for (var iteratorY = iteratorX + 1; iteratorY < squares.length; iteratorY++) {
            if (squares[iteratorX] > squares[iteratorY]) {
                var temp = squares[iteratorX];
                squares[iteratorX] = squares[iteratorY];
                squares[iteratorY] = temp;
            }
        }
    }
    console.log({ counter: counter });
    return squares;
}
function sortedSquaresOptimized(nums) {
    return nums
        .map(function (n) {
        return n * n;
    })
        .sort(function (a, b) { return a - b; });
}
var sorted = sortedSquares([-7, -3, 2, 3, 11]);
console.log({ sorted: sorted });
