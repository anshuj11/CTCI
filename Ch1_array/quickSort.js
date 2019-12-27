function quicksort(A) {
    if (A.length < 2)
        return A;
    let mid = Math.floor(A.length / 2);

    let left = A.filter(el => el < A[mid]);
    let right = A.filter(el => el > A[mid]);
    let middle = A.filter(el => el === A[mid]);
    return (quicksort(left).concat(middle.concat(quicksort(right))))
}

console.log(quicksort([8,3,2,5,4,1,7,5,6]))