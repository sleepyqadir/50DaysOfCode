function removeElement(nums: number[], val: number): number {
  for (let index = 0; index < nums.length; index++) {
    console.log({ value: nums[index] });
    if (nums[index] === val) {
      console.log(nums[index]);
      nums.splice(index, 1);
      index--;
    }
  }
  return nums.length;
}

const arrayLength = removeElement([0, 1, 2, 2, 3, 0, 4, 2], 2);
const arrayLength2 = removeElement([3, 2, 2, 3], 3);

console.log({ arrayLength, arrayLength2 });
