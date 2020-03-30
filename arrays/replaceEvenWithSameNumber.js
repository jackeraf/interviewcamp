// Given an array of numbers, replace each even number with two of the same number. e.g, [1,2,5,6,8] -> [1,2,2,5,6,6,8,8]. Assume that the array has enough space to accommodate the result

function repeatEvenNumbers(arr) {
  let offset = 0;
  for (let i = 0; i < arr.length; i++) if (arr[i] % 2 === 0) offset++;
  for (let i = arr.length - 1; i > 0; i--) {
    if (arr[i] % 2 === 0)
      //for even numbers, set an additional element
      arr[i + offset--] = arr[i]; //and decrement offset going forward
    arr[i + offset] = arr[i];
  }
  return arr;
}
console.log(repeatEvenNumbers([1, 2, 5, 6, 8, 8, 7, 7]));

const repeatEvenNumbers = numbers => {
  for (let i = numbers.length; i > 0; i--) {
    if (numbers[i] % 2 == 0) {
      for (let j = numbers.length; j > i; j--) {
        numbers[j] = numbers[j - 1];
      }
    }
  }
  return numbers;
};
