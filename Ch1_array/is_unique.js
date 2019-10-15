function is_unique1(str) {
  let m = new Map();
  for (i of str) {
    if (m[i]) return false;
    m[i] = true;
  }
  return true;
}

function is_unique2(str) {
  for (i in str) {
    for (j in str) {
      if ((j != i )&& ((str[i].charCodeAt(0)^str[j].charCodeAt(0)) == 0))
        return false;
    }
  }
  return true;
}

function is_unique3(str) {}
console.log(is_unique2("string"));
