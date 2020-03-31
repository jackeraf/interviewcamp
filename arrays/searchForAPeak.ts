// Search for a Peak: A peak element in array A is an A[i] where its adjacent elements are less than A[i]. So, A[i - 1] < A[i] and A[i + 1] < A[i].

// Time Complexity: O(log(n))
// Space Complexity: O(1)

function peakSearch(a: number[]) {
  if (a == null || a.length == 0) return -1;
  let low = 0;
  let high = a.length - 1;
  while (low <= high) {
    let mid = Math.floor(low + (high - low) / 2);
    let left = mid > 0 ? a[mid - 1] : -Infinity;
    let right = mid < a.length - 1 ? a[mid + 1] : -Infinity;
    if (left < a[mid] && a[mid] > right) {
      return mid;
    } else if (left < a[mid] && right > a[mid]) {
      low = mid + 1;
    } else {
      high = mid - 1;
    }
  }
  return -1;
}
console.log(peakSearch([]));
console.log(peakSearch([1]));
console.log(peakSearch([1, 3, 5, 4, 2]));
console.log(peakSearch([9, 3, 4, 5, 2]));
console.log(peakSearch([1, 3, 4, 5, 9]));
