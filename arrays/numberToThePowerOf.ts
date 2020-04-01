/*
 Implement a function to calculate X^N. Both X and N can be positiveor negative.
*/

// Time Complexity: O(log(N))
// Space Complexity: O(log(N)) on call stack

function powerToN(x: number, power: number) {
  if (x == 0 && power <= 0) {
    throw "undefined";
  }
  let result = positivePower(Math.abs(x), Math.abs(power));
  if (power < 0) result = 1 / result;
  if (x < 0 && power % 2 != 0) result = -1 * result;
  return result;
}
function positivePower(x: number, power: number) {
  if (power == 0) return 1;
  if (power == 1) return x;
  let halfPower = positivePower(x, Math.floor(power / 2));
  if (power % 2 == 0) {
    // 2​^16​ = 2​8​ * 2​
    return halfPower * halfPower;
  } else {
    return x * halfPower * halfPower;
  }
}

console.log(powerToN(5, 10));
