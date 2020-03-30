/*
Given an array, move all zeroes to the end of the array.
For example, [4,2,0,1,0,3,0] -> [4,1,2,3,0,0,0]
*/

function zerosToEnd(arr) {
  let boundary = arr.length - 1;
  for (let i = arr.length - 1; i >= 0; i--) {
    const num = arr[i];
    if (num === 0) {
      swap(i, boundary, arr);
      boundary--;
    }
  }
  return arr;
}
function swap(i, boundary, arr) {
  let temp = arr[boundary];
  arr[boundary] = arr[i];
  arr[i] = temp;
}
zerosToEnd([4, 2, 0, 1, 0, 3, 0]);
