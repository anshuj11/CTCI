function findWords(board, words, res) {
    board.forEach(row => {
        let r = row.join("");
        words.forEach(w => {
            if (r.includes(w))
                res.push(w);
        })
    }) 
}


function boggleBoard(board, words) {
    // Write your code here.
    let res = [];
    let boardT = [];
    let maxWidth = 0;
    findWords(board, words, res)
    board.forEach(row => {
        if (row.length > maxWidth)
            maxWidth = row.length;
    })
    for (let i = 0; i < maxWidth; i++){
        boardT.push([]);
    }
    board.forEach(row => {
        row.forEach((ch, i) => {
            boardT[i].push(ch)
        })
    })
    console.log("boardT: ", boardT);
    findWords(boardT, words, res)

    return res;
}

// Do not edit the line below.
const a = [["t", "h", "i", "s", "i", "s", "a"],
    ["s", "i", "m", "p", "l", "e", "x"],
    ["b", "x", "x", "x", "x", "e", "b"],
    ["x", "o", "g", "g", "l", "x", "o"],
    ["x", "x", "x", "D", "T", "r", "a"],
    ["R", "E", "P", "E", "A", "d", "x"],
    ["x", "x", "x", "x", "x", "x", "x"], 
    ["N", "O", "T", "R", "E", "-", "P"],
    ["x","x","D","E","T","A","E"]
]
const dict = ["this", "is", "not", "a", "simple", "boggle", "board", "test", "REPEATED", "NOTRE-PEATED"]
console.log(boggleBoard(a, dict));