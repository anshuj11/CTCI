function sameBsts(a1, a2) {
    // Write your code here.
    console.log("A1", a1);
    console.log("A2", a2);
    if (a1.length === 0 && a2.length === 0)
        return true;
    if (a1.length !== a2.length)
        return false;
    if (a1[0] !== a2[0])
        return false;
    let pivot = a1[0];
    a1 = a1.slice(1);
    a2 = a2.slice(1);
    let a1_left = a1.filter(el => el < pivot);
    let a1_right = a1.filter(el => el >= pivot);
    let a2_left = a2.filter(el => el < pivot);
    let a2_right = a2.filter(el => el >= pivot);

    return sameBsts(a1_left, a2_left) && sameBsts(a1_right, a2_right);
 
}

console.log(sameBsts([1,2,3,4,5,6,7], [1,2,3,4,5,6,7]))