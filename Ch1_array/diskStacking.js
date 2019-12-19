function diskStacking(disks) {
    // Write your code here.
    disks = disks.sort((a, b) => a[2] - b[2])
    console.log("disks: ", disks)

    let height = [];
    let res = [];
    disks.forEach((triplet, ind) => {
        let maxHeight = triplet[2];
        let maxRes=[];
        let mySlice = disks.slice(0, ind);
        mySlice.forEach((el, i) => {
            if (el[0] < triplet[0] && el[1] < triplet[1] && el[2] < triplet[2]) {
                let ht = height[i] + triplet[2]
                let tempRes = res[i]
                if (ht > maxHeight) {
                    maxHeight = ht;
                    maxRes=tempRes.slice();  //To make a deep copy
                }
            }


        })
        maxRes.push(triplet);
        height.push(maxHeight);
        res.push(maxRes);
    })

    console.log("Height: ", height);
    console.log("Result: ", res);
    maxH = -1;
    maxI = -1;
    height.forEach((h, i) => {
        if (h > maxH) {
            maxH = h;
            maxI = i;
        }
    })
    return res[maxI];
}
// Do not edit the line below.
console.log(diskStacking([[2,1,2], [3,2,3],[2,2,8],[2,3,4],[1,3,1],[4,4,5]] ))