function isPalPerm(str) {
  var m = new Map();

  for (s of str) {
    console.log("s: ", s);
    if (m.get(`${s}`) === 1) {
      m.delete(s);
      console.log("m: postdelete", m);
    } else
        m.set(`${s}`,  1)
  }
   // m.forEach(el m)
  console.log("m.size: ", m.size);
  if (m.size < 2) return true;
  return false;
}

console.log(isPalPerm("rsrs"));
