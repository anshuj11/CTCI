function minNumberOfJumps(A) {
    // Write your code here.
    res = [0]
    for (let i = A.length - 2; i > -1; i--){
        if (A[i] >= A.length - (i + 1))
            res.unshift(1)
        else {
            let minJumps = A.length;
            for (let j = i; j < i+A[i]; j++){
                if (minJumps > res[j-i] + 1)
                    minJumps = res[j-i] + 1;
            }
            res.unshift(minJumps);
        }
    }
    return res[0]

}

// Do not edit the line below.
console.log(minNumberOfJumps([3,4,2,1,2,3,7,1,1,1,3]));
