function merge(nums1: number[], m: number, nums2: number[], n: number): void {
  let numsL = nums1.length;
  nums1.splice(m);
  if (numsL * n === 0 || numsL * n === 1) {
    console.log('here');
    n === 1 && (nums1[0] = nums2[0]);
    return;
  }

  let y = m - 1;
  for (let i = 0; i < n; ) {
    if (nums2[i] >= nums1[y] && y === m - 1) {
      nums1.push(nums2[i]);
      y = m - 1;
      i++;
    } else if (nums2[i] >= nums1[y]) {
      for (var j = nums1.length - 1; j >= y; j--) {
        nums1[j + 1] = nums1[j];
      }
      nums1[y] = nums2[i];
      y = m - 1;
      i++;
    } else {
      y--;
    }
  }
}

const nums1 = [1, 2, 3, 0, 0, 0],
  m = 3,
  nums2 = [2, 5, 6],
  n = 3;
merge(nums1, m, nums2, n);
console.log({ nums1 });

const nums3 = [1, 0],
  x = 1,
  nums4 = [2],
  y = 1;

merge(nums3, x, nums4, y);
console.log({ nums3 });

const nums5 = [1],
  h = 1,
  nums6 = [],
  k = 0;

merge(nums5, h, [], k);
console.log({ nums5 });
