function sortedSquares(nums: number[]): number[] {
  const squares = nums.map((n) => {
    return n * n;
  });
  let counter: number = 0;
  for (let iteratorX = 0; iteratorX < squares.length; iteratorX++) {
    for (
      let iteratorY = iteratorX + 1;
      iteratorY < squares.length;
      iteratorY++
    ) {
      if (squares[iteratorX] > squares[iteratorY]) {
        let temp: number = squares[iteratorX];
        squares[iteratorX] = squares[iteratorY];
        squares[iteratorY] = temp;
      }
    }
  }

  console.log({ counter: counter });

  return squares;
}

function sortedSquaresOptimized(nums: number[]): number[] {
  return nums
    .map((n) => {
      return n * n;
    })
    .sort((a, b) => a - b);
}

const sorted = sortedSquares([-7, -3, 2, 3, 11]);
console.log({ sorted });
