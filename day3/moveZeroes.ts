/**
 Do not return anything, modify nums in-place instead.
 */
function moveZeroes(nums: number[]): void {
  const zeros = [];
  for (let index = 0; index < nums.length; index++) {
    console.log(nums[index]);
    if (nums[index] === 0) {
      nums.splice(index, 1);
      zeros.push(0);
      index--;
    }
  }
  for (let i = 0; i < zeros.length; i++) {
    nums.push(0);
  }
}
const num = [0, 0, 1];
console.log(moveZeroes(num));
console.log({ num });
