function maxSumIncreasingSubsequence(A) {
  // Write your code here.
  let sum = [A[0]];
  let seq = ["None"];
  for (let i = 1; i < A.length; i++) {
    let maxSum = A[i];
    let maxInd = "None";
    for (j = 0; j < i; j++) {
      if (A[j] < A[i]) {
        if (maxSum < A[i] + sum[j]) {
          maxSum = A[i] + sum[j];
          maxInd = j;
        }
      }
    }
    sum.push(maxSum);
    seq.push(maxInd);
  }
  console.log("Sum: ", sum);
  console.log("Seq: ", seq);

  let maxSum = sum[0];
  let maxInd = 0;

  sum.forEach((el, ind) => {
    if (el > maxSum) {
      maxSum = el;
      maxInd = ind;
    }
  });
  console.log("MaxInd: ", maxInd);
  console.log("maxSum: ", maxSum);
  let res = [maxInd];
  let i = seq[maxInd];
  while (i !== "None") {
    res.unshift(i);
    i = seq[i];
  }
  return res;
}

// Do not edit the line below.
console.log(maxSumIncreasingSubsequence([10, 70, 20, 30, 50, 11, 30]));
