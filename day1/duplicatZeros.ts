/**
 Do not return anything, modify arr in-place instead.
 */
let arr = new Array<number>(8);
arr[0] = 1;
arr[1] = 0;
arr[2] = 2;
arr[3] = 3;
arr[4] = 0;
arr[5] = 4;
arr[6] = 5;
arr[7] = 0;
// function duplicateZeros(arr: number[]): void {
//   const newArray = [];
//   for (const iterator of arr) {
//     if (iterator === 0 && arr.length - newArray.length >= 2) {
//       newArray.push(0);
//       newArray.push(0);
//     } else if (arr.length > newArray.length) {
//       newArray.push(iterator);
//     }
//   }
// }

function duplicateZeros(arr: number[]): void {
  const newArray = arr
    .join('')
    .split('0')
    .join('00')
    .slice(0, 8)
    .split('')
    .map(Number);
}

duplicateZeros(arr);
console.log({ arr });
// trick [1,0,2,3,0,4,5,0].join("").split("0").join("00").slice(0,8).split("").map(Number)
