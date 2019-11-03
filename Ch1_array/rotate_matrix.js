function rotate_matrix(A) {
  for (let i = 0; i < A.length; i++) {
    for (let j = i + 1; j < A[0].length; j++) {
      [A[i][j], A[j][i]] = [A[j][i], A[i][j]];
    }
  }
  return A;
}

console.log(rotate_matrix([[1, 1, 1], [2, 2, 2]]));
