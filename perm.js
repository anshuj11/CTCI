//Find all permutations of an array

function perm(arr) {
  if (arr.length === 1) return arr;
  let perm = [];
  arr.forEach(el => {
    if (perm.length > 0) {
      temp_perm = [];
      perm.forEach(p => {
        let temp = p;
        temp_perm.push([el].concat(temp));
        temp.forEach((item, index) => {
          temp_perm.push(
            temp
              .slice(0, index + 1)
              .concat([el])
              .concat(temp.slice(index + 1))
          );
        });
        // p.push(el);
        perm = temp_perm;
      });
    } else {
      perm.push([el]);
    }
  });
  console.log("Num of items: ", perm.length);
  return perm;
}

console.log(perm([4, 3, 2, 1]));
