function zigzag(A) {
    res = [];
    dir = "down"
    let i, j;
    for ( i = 0, j = 0; i < A.length && j < A[0].length;){
        res.push(A[i][j])
        if (dir === "up") {
            if (i > 0 && j < A[0].length - 1) {
                i--;
                j++;
            } else if( (i === 0)&& (j!== A[0].length-1) ){
                j++;
                dir = "down"
            } else {
                i++;
                dir = "down"
            }
        }else {
            if (j > 0 && i < A.length - 1) {
                i++
                j--
            } else if ((j === 0) && (i!==A.length-1 )){
                i++;
                dir = "up";
            } else {
                j++;
                dir = "up";
            }
        }
            

    }
    
    return res;
}

A = [[1, 3, 4, 10], [2, 5, 9, 11], [6, 8, 12, 15], [7, 13, 14, 16]]
console.log(zigzag(A))

//1,3, 4, 10
//2,5, 9, 11
//6,8, 12,15
//7,13,14,16