function peakValley(A) {
    if (A.length < 3)
        return false;
    let increasing = true;
    let valley = -1;
    let peak = -1;
    for (let i = 1; i < A.length; i++){
        if (i !== 1) {
            if (!increasing && A[i - 1] < A[i]) {
                increasing = true;
                if (peak > -1 || valley > -1)
                    return false
                valley = i-1;
            } else if (increasing && A[i - 1] > A[i]) {
                increasing = false;
                if (peak > -1 || valley > -1)
                    return false
                peak = i - 1;
            }
            
        } else {
            if (A[i - 1] > A[i])
                increasing = false;
        }

    }
    return ((peak > -1) ? peak : ((valley> -1)?valley: false))
}


console.log(peakValley([1, 2, 3]))