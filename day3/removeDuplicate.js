function removeDuplicate(nums) {
    for (var index = 0; index < nums.length; index++) {
        console.log({ value: nums[index], next: nums[index + 1] });
        if (nums[index] === nums[index + 1]) {
            nums.splice(index, 1);
            index--;
        }
    }
    return nums.length;
}
console.log(removeDuplicate([0, 1, 2, 2, 3, 0, 4, 2]), removeDuplicate([3, 2, 2, 3]), removeDuplicate([1, 1, 2]), removeDuplicate([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
