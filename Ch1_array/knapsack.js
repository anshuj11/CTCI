function knapsackProblem(items, capacity) {
  // Write your code here.
  let matrix = [];
  matrix.push([0]);
  for (let i = 0; i < capacity; i++, matrix[0].push(0));

  console.log("initial setup: ", matrix);

  items.forEach((tuple, ind) => {
    let row = [];
    for (let i = 0; i <= capacity; i++) {
      if (tuple[1] > i) {
        row.push(matrix[matrix.length - 1][i]);
      } else {
        let el = Math.max(
          tuple[0] + matrix[matrix.length - 1][i - tuple[1]],
          matrix[matrix.length - 1][i]
        );
        row.push(el);
      }
    }
    matrix.push(row);
  });

  console.log("matrix: ");
    console.log(matrix);
    let res = [];
    let row = matrix.length - 1;
    let col = capacity;
    let el = matrix[row][col];
    

    while (el > 0) {
        if (el !== matrix[row - 1][col]) {
            res.unshift(row - 1)
            row = row - 1;
            col = col - items[res[0]][1]
            el = matrix[row][col]
        } else {
            row = row - 1;
      }
    }
    return [res, matrix[matrix.length - 1][capacity]]
}

// Do not edit the line below.
console.log(
  knapsackProblem(
    [
      [1, 2],
      [4, 3],
      [5, 6],
      [6, 7]
    ],
    10
  )
);
