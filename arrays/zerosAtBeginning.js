/*
You are given an array of integers. Rearrange the array so that all zeroes are at the beginning of the array.
For example, [4,2,0,1,0,3,0] -> [0,0,0,4,1,2,3]
*/

// Time Complexity: O(n)
// Space Complexity: O(1)

function zerosToBeginning(arr) {
  let boundary = 0;
  for (let i = 0; i < arr.length; i++) {
    const num = arr[i];
    if (num === 0) {
      let temp = arr[boundary];
      arr[boundary] = arr[i];
      arr[i] = temp;
      boundary++;
    }
  }
  return arr;
}
zerosToBeginning([4, 2, 0, 1, 0, 3, 0]);
