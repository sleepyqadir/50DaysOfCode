function replaceElements(arr) {
    for (var index = 0; index < arr.length; index++) {
        max = -1;
        for (var i = index + 1; i < arr.length; i++) {
            arr[i] > max && (max = arr[i]);
        }
        arr[index] = max;
    }
    return arr;
}
console.log(replaceElements([17, 18, 5, 4, 6, 1]));
console.log(replaceElements([400]));
