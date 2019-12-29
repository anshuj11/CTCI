function quickSelect(A, k) {
    let res;
    if (A.length < 2)
        return A[0]
    let pivot = A[0];
    let left = A.filter(el => el < pivot);
    let mid = A.filter(el => el === pivot);
    let right = A.filter(el => el > pivot);
    let lenL = left.length;
    let lenM = mid.length;
    if (lenL + lenM < k) {
        return quickSelect(right, k - (lenL + lenM))
    } else if (lenL + lenM > k) {
        if (lenL < k) {
            return pivot;
        } else {
            return quickSelect(left, k )
        }
    } else {
        return pivot
    }
}

console.log(quickSelect([8,5,2,9,7,6,3], 3))