function lcs(S1, S2) {
    let matrix = [];
    let row = []
    for (let i = 0; i <= S2.length; i++)
        row.push("");
    matrix.push(row)
    for (let i = 1; i <= S1.length; i++){
        row = [""]
        for (let j = 1; j <= S2.length; j++){
            if (S1[i-1] === S2[j-1])
                row.push(matrix[i-1][j-1] + S1[i-1]);
            else {
                let tempStr1 = matrix[i-1][j];
                let tempStr2 = row[row.length-1];
                if (tempStr1.length > tempStr2.length)
                    row.push(tempStr1)
                else
                    row.push(tempStr2)
            }
                
        }
        matrix.push(row)
    }
    console.log("Matrix: ", matrix);
    return matrix[matrix.length-1][matrix[0].length-1]
}

console.log( "LCS: ", lcs("ZXVVYZW", "XKYKZPW"))