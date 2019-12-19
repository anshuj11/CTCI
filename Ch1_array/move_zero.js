function isValid(a) {
  let valid = true;
  if (a[0][0] !== 0) return false;
  a.forEach((row, rInd) => {
    row.forEach((cell, cInd) => {
        if (rInd !== a.length - 1) {
        if (cell > a[rInd + 1][cInd]) valid = false;
      }
      if (cInd !== a[0].length - 1) {
        if (cell > a[rInd][cInd + 1]) valid = false;
      }
    });
  });
  return valid;
}

function moveZero(a) {
  let moves = 0;
  let valid = true;
  if (isValid(a))
        return moves;

  return moves;
}

let a = [
  [0, 1, 3],
  [2, 4, 6],
  [8, 7, ]
];

// console.log(
//   isValid([
//     [0, 2, 3],
//     [1, 4, 6],
//     [8, 7, 5]
//   ])
// );
console.log( moveZero( a))
