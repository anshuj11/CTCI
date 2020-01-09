function centaur(A) {
    let reqs = 0;
    let res = [];
    A.forEach((ca, i) => {
        let reqs = 0;
        A.forEach((cb, j) => {
            if (i !== j) {
                if (cb >= ((ca/2)+7)) {
                    if ((cb > 100 && ca > 100 && ca > cb) || (cb <= 100 && ca <= 100 && ca> cb)) {
                        reqs++
                    }
                }
            }
        })
        res.push(reqs)
    })
    return reqs;
}

console.log(centaur([120, 45, 55, 230, 400, 88, 300, 101]))
//                  [1,    0,  1,   2,    1,  1, 0]