function validMountainArray(arr: number[]): boolean {
  if (arr.length <= 2) return false;
  let maxIndex = arr.indexOf(Math.max(...arr));
  if (arr.length - 1 === maxIndex || arr.length <= 2 || maxIndex === 0)
    return false;
  let valid = true;
  let max = arr[0];
  for (let index = 1; index <= maxIndex; index++) {
    if (max >= arr[index]) {
      valid = false;
      break;
    }
    max = arr[index];
  }
  if (!valid) return valid;
  max = arr[maxIndex];
  for (let index = maxIndex + 1; index < arr.length; index++) {
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
