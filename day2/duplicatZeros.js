/**
 Do not return anything, modify arr in-place instead.
 */
var arr = new Array(8);
arr[0] = 1;
arr[1] = 0;
arr[2] = 2;
arr[3] = 3;
arr[4] = 0;
arr[5] = 4;
arr[6] = 5;
arr[7] = 0;
function duplicateZeros(arr) {
    for (var i = 0; i < arr.length; i++) {
        console.log('before second loop', { arr: arr });
        if (arr[i] === 0) {
            for (var j = arr.length - 1; j >= i + 1; j--) {
                console.log(arr[j], arr[j - 1]);
                arr[j] = arr[j - 1];
            }
            i++;
            console.log('after second loop', { arr: arr });
        }
    }
}
// function duplicateZeros(arr: number[]): void {
//   const newArray = arr
//     .join('')
//     .split('0')
//     .join('00')
//     .slice(0, 8)
//     .split('')
//     .map(Number);
// }
duplicateZeros(arr);
console.log({ arr: arr });
// trick [1,0,2,3,0,4,5,0].join("").split("0").join("00").slice(0,8).split("").map(Number)
