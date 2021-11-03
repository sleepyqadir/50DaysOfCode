function validMountainArray(arr) {
    if (arr.length <= 2)
        return false;
    var maxIndex = arr.indexOf(Math.max.apply(Math, arr));
    if (arr.length - 1 === maxIndex || arr.length <= 2 || maxIndex === 0)
        return false;
    var valid = true;
    var max = arr[0];
    for (var index = 1; index <= maxIndex; index++) {
        if (max >= arr[index]) {
            valid = false;
            break;
        }
        max = arr[index];
    }
    if (!valid)
        return valid;
    max = arr[maxIndex];
    for (var index = maxIndex + 1; index < arr.length; index++) {
        if (max <= arr[index]) {
            valid = false;
            break;
        }
        max = arr[index];
    }
    return valid;
}
console.log(validMountainArray([0, 3, 5, 9]));
console.log(validMountainArray([2, 1]));
console.log(validMountainArray([3, 5, 5]));
