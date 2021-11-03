function checkIfExist(arr) {
    var exist = false;
    arr.forEach(function (num, index) {
        var find = arr.indexOf(num * 2);
        console.log({ index: index, num: num, numS: num * 2 });
        if (find > -1 && find != index) {
            exist = true;
        }
    });
    return exist;
}
console.log(checkIfExist([3, 1, 7, 11]));
console.log(checkIfExist([-2, 0, 10, -19, 4, 6, -8]));
