//Given two strings, write a method to decide if one is a permutation of the other
// #1, #84, #122, #131

function isPerm(s1, s2) {
  let m = new Map();
  for (i of s1) {
    if (!m[i]) m[i] = 1;
    else m[i]++;
  }
  for (j of s2) {
    if (!m[j]) return false;
    else m[j]--;
  }

  for (k in m) {
    //console.log("m[",k,"]: ", m[k])
    if (m[k] !== 0) return false;
  }

  return true;
}

// console.log(isPerm("abc", "bcad"));
