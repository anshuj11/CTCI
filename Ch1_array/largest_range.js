function largestRange(a) {
    // Write your code here.
    let m = {}
    let res = [];
    let range = []
    a.forEach(el => {
        m[el] = true;
    })
    console.log("M: ", m);

    a.forEach(el => {
        let left = el;
        let right = el;
        if (m[el]) {
            while (m[++right]) {
                m[right] = false;
            }
            while (m[--left]) {
                m[left] = false;
            }
        }
        range.push([++left, --right])

    })
    let maxRange = -1;
    let maxtuple;
    range.forEach(r => {

        if (r[1] - r[0] > maxRange) {
            maxRange = r[1] - r[0];
            maxtuple = r;
        }
    });
    return maxtuple;
}

// Do not edit the line below.
console.log("largestRange: ", largestRange([1,11,3,0, 15, 5, 2, 4,10, 7, 12, 6]));
