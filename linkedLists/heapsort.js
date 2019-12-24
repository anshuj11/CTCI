

function heapsort(A) {
    makeHeap(A)
    for (let i = A.length-1; i > 0; i--){
        [A[i], A[0]] = [A[0], A[i]]
        sift(i);

    
    }
    return A;
   
    function makeHeap(A) {
        let ptr;
        let parentPtr;
        let max = A[0];
        for (let curr = 1; curr < A.length; curr++) {
            ptr = curr;
            (curr % 2 === 0) ? (parentPtr = (curr- 2) / 2) : (parentPtr = (curr - 1) / 2);
            while (A[ptr] > A[parentPtr]) {
                [A[ptr], A[parentPtr]] = [A[parentPtr], A[ptr]]
                if (parentPtr === 0) {
                    max = A[0];
                }
                ptr = parentPtr;
                (ptr % 2 === 0) ? (parentPtr = (ptr - 2) / 2) : (parentPtr = (ptr - 1) / 2);
            }
        }
            
    }
    
    function sift(i) {  //topDown
        let parentPtr = 0;
        let lPtr = 1;
        let rPtr = 2;
        let temp;
        while ( ((lPtr< i)&&(rPtr < i)) && ((A[parentPtr] < A[lPtr]) || (A[parentPtr] < A[rPtr]))) {
            if (A[lPtr] > A[rPtr]) {
                if (lPtr < i) {
                    [A[lPtr], A[parentPtr]] = [A[parentPtr], A[lPtr]]
                    temp = lPtr;
                }
            } else {
                if (rPtr < i) {
                    [A[rPtr], A[parentPtr]] = [A[parentPtr], A[rPtr]]
                    temp = rPtr;
                }
            }
            lPtr = temp * 2 + 1;
            rPtr = temp * 2 + 2;
            parentPtr = temp;
        }
        if ((lPtr < i) && (A[parentPtr] < A[lPtr])) {
            [A[lPtr], A[parentPtr]] = [A[parentPtr], A[lPtr]]
        }
    }


}

console.log(heapsort([5, -2, 2, -8, 3, -10, -6, -1, 2, -2, 9, 1, 1]))