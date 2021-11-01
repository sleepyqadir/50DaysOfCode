// code
function findMaxConsecutiveOnes(nums: number[]): number {
  let max: number = 0;
  let counter: number = 0;
  for (const iterator of nums) {
    if (iterator === 1) {
      counter++;
    } else {
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

function findMaxConsecutiveOnesOptimized(nums: number[]): number {
  return Math.max(
    ...nums
      .join('')
      .split('0')
      .map((s) => s.length)
  );
}

let max = findMaxConsecutiveOnes([0, 1, 1, 1, 1, 1]);
console.log({ max });

max = findMaxConsecutiveOnesOptimized([0, 1, 0, 1, 1, 1]);
console.log({ max });

max = findMaxConsecutiveOnes([0, 1, 0, 0, 1, 1]);
console.log({ max });

max = findMaxConsecutiveOnes([1, 1, 1, 0, 1, 1]);
console.log({ max });
