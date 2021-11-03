// function removeDuplicate(nums: number[], val: number): number {
//   for (let index = 0; index < nums.length; index++) {
//     console.log({ value: nums[index] });
//     if (nums[index] === val && nums[index + 1] === val) {
//       console.log(nums[index]);
//       nums.splice(index, 1);
//       nums.splice(index + 1, 1);
//       index--;
//     }
//   }
//   return nums.length;
// }

// const length1 = removeDuplicate([0, 1, 2, 2, 3, 0, 4, 2], 2);
// const length2 = removeDuplicate([3, 2, 2, 3], 3);

// console.log({ arrayLength, arrayLength2 });
