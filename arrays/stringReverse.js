// For example, "i live in a house" becomes "house a in live i".

// time complexity O(n)
// space complexity O(n)

function reverseSentence(sent = "") {
  if (sent.length === 0 || sent.length === 1) {
    return sent;
  }
  let revSent = "";
  let wordIdx = sent.length - 1;
  let singleWord = "";
  while (wordIdx >= 0) {
    const currLetter = sent[wordIdx];
    if (currLetter === " ") {
      revSent = revSent + singleWord + " ";
      singleWord = "";
      wordIdx--;
    } else {
      singleWord = currLetter + singleWord;
      wordIdx--;
    }
  }
  revSent = revSent + singleWord;
  return revSent;
}
reverseSentence("i live in a house");
