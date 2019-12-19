function waterArea(H) {
  // Write your code here.

  let maxL = [];
  let maxR = [];
  let res = [];

  for (let i = 0; i < H.length; i++) {
    let mL = 0;
    let mR = 0;
    if (i !== 0) mL = Math.max(...H.slice(0, i));
    if (i !== H.length - 1) mR = Math.max(...H.slice(i + 1));
    res.push(Math.min(mL, mR) - H[i]);
  }
  console.log("res: ", res);
  //console.log("maxR: ", maxR)

    return res.filter(el => el > 0).reduce((sum, el) =>  sum + el);
}

// Do not edit the line below.
console.log(waterArea([0, 8, 0, 0, 5, 0, 0, 10, 0, 0, 1, 1, 0, 3]));
