function findNumbers(nums: number[]): number {
  let counter: number = 0;
  nums.forEach((num) => {
    num.toString().length % 2 === 0 ? (counter += 1) : counter;
  });
  console.log({ counter });
  return counter;
}

const answer = findNumbers([12, 345, 2, 6, 7896]);
