// Reverse an array with constant time space and time complexity O(n/2):

function reverseArray(a) {
    for (let i = 0; i < a.length/2; i++) {
           let temp = a[i];
           a[i] = a[a.length - 1 - i];
           a[a.length - 1 - i] = temp;
    }
    return a;
}

console.log(reverseArray([1,2,3,4,5]))