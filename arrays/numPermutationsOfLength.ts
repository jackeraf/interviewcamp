function numPermutationsOfLength(arr: number[], length: number) {
  let buffer = new Array(length);
  return doPermutations(arr, buffer, 0, 0);
}

function doPermutations(
  arr: number[],
  buffer: number[],
  startIndex: number,
  bufferIndex: number
) {
  if (bufferIndex === buffer.length) {
    console.log(buffer);
    return;
  }
  if (startIndex === arr.length) return;
  for (let i = startIndex; i < arr.length; i++) {
    buffer[bufferIndex] = arr[i];
    doPermutations(arr, buffer, i + 1, bufferIndex + 1);
  }
}

numPermutationsOfLength([1, 2, 3, 4, 5], 3);
