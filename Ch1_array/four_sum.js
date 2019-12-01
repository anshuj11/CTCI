function fourNumberSum(array, targetSum) {
  // Write your code here.
  tupleHash = {};
  res = [];
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      let part = targetSum - (array[i] + array[j]);
      if (tupleHash[part]) {
        let res_pairs = tupleHash[part];
        for (let k = 0; k < res_pairs.length; k++)
          res.push([array[i], array[j], res_pairs[k][0], res_pairs[k][1]]);
      }
    }
    for (let l = 0; l < i; l++) {
      let part = targetSum - (array[i] + array[l]);
      if (tupleHash[array[i] + array[l]]) {
        tupleHash[array[i] + array[l]].push([array[i], array[l]]);
      } else {
        tupleHash[array[i] + array[l]] = [[array[i], array[l]]];
      }
    }
  }
  console.log("tupleHash: ", tupleHash);
  return res;
}

// Do not edit the line below.
console.log(fourNumberSum([7, 6, 4, -1, 1, 2], 16));
