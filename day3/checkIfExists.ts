function checkIfExist(arr: number[]): boolean {
  let exist = false;
  arr.forEach((num, index) => {
    let find = arr.indexOf(num * 2);
    console.log({ index, num, numS: num * 2 });
    if (find > -1 && find != index) {
      exist = true;
    }
  });
  return exist;
}

console.log(checkIfExist([3,1,7,11]));
console.log(checkIfExist([-2, 0, 10, -19, 4, 6, -8]));
