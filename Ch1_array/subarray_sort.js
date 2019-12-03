function subarraySort(a) {
  // Write your code here.
  let init_ind = -1;
  let end_ind = -1;
  let minUnsorted = 10000;
  let maxUnsorted = -111111;
  // [1, 2, 4, 7, 10, 11, 7, 12, 6, 7, 16, 18, 19]

  for (let i = 0; i < a.length; i++) {
    if (i !== a.length - 1) {
      if (a[i] > a[i + 1]) {
        if (init_ind !== -1) end_ind = i + 1;
        else init_ind = i + 1;
      }
    }
  }
  console.log("init_ind, end_ind ", init_ind, end_ind);
  if (init_ind !== -1 && end_ind === -1) end_ind = init_ind;
  minUnsorted = Math.min(...a.slice(init_ind, end_ind + 1));
  maxUnsorted = Math.max(...a.slice(init_ind, end_ind + 1));
  console.log("MaxUnsorted: ", maxUnsorted);
  for (let j = 0; j <= init_ind; j++) {
    if (a[j] > minUnsorted) init_ind = j;
  }
  if (a[init_ind] > maxUnsorted) {
    maxUnsorted = a[init_ind];
  }
  for (j = end_ind + 1; j < a.length; j++) {
    if (a[j] < maxUnsorted) end_ind = j;
  }

  return [init_ind, end_ind];
}

// Do not edit the line below.
console.log(subarraySort([1, 2, 8, 4, 5]));
