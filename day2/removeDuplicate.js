function removeDuplicate(nums, val) {
    for (var index = 0; index < nums.length; index++) {
        console.log({ value: nums[index] });
        if (nums[index] === val && nums[index + 1] === val) {
            console.log(nums[index]);
            nums.splice(index, 1);
            nums.splice(index + 1, 1);
            index--;
        }
    }
    return nums.length;
}
var length1 = removeDuplicate([0, 1, 2, 2, 3, 0, 4, 2], 2);
var length2 = removeDuplicate([3, 2, 2, 3], 3);
console.log({ arrayLength: arrayLength, arrayLength2: arrayLength2 });
