function printWords(phoneNumber: number[]) {
  if (phoneNumber == null || phoneNumber.length == 0) return;
  let buffer = new Array(phoneNumber.length);
  combination(phoneNumber, buffer, 0, 0);
}

function combination(
  arr: number[],
  buffer: number[],
  nextIndex: number,
  bufferIndex: number
) {
  if (bufferIndex === buffer.length || nextIndex === arr.length) {
    console.log(buffer);
    return;
  }
  // Find candidates [abc, def,...]
  let letters: number[] = getLetters(arr[nextIndex]);
  if (letters.length === 0)
    combination(arr, buffer, nextIndex + 1, bufferIndex);
  // Place candidates in the buffer:
  for (let i = 0; i < letters.length; i++) {
    buffer[bufferIndex] = letters[i];
    // Recurse to next buffer index
    combination(arr, buffer, nextIndex + 1, bufferIndex + 1);
  }
}

function getLetters(digit: number) {
  const mappings = {
    0: [],
    1: [],
    2: ["a", "b", "c"],
    3: ["d", "e", "f"],
    4: ["g", "h", "i"],
    5: ["j", "k", "l"],
    6: ["m", "n", "o"],
    7: ["p", "q", "r", "s"],
    8: ["t", "u", "v"],
    9: ["w", "x", "y", "z"],
  };
  const value = mappings[digit];
  if (!Boolean(value)) {
    throw "Invalid Digit " + digit;
  }
  return value;
}

console.log(printWords([2, 1, 3]));
console.log(printWords([4, 5, 6]));
