//https://www.algoexpert.io/questions/Min%20Rewards

function minRewards(scores) {
    // Write your code here.
    res = [];

    scores.forEach(el => res.push(1));
    let change = true;
    while (change) {
        change = false;
        for (let i = 0; i < scores.length ; i++) {
            if (i<scores.length-1 && scores[i] > scores[i + 1] && res[i] <= res[i + 1]) {
                res[i]++;
                change = true;
            
            }
            if (i > 0 && scores[i] > scores[i - 1] && res[i] <= res[i -1]) {
                res[i]++;
                change = true;

            }
        }
        
    }
    return res
}

// Do not edit the line below.
console.log(minRewards([8, 4, 2, 1, 3, 6, 7, 9, 5]));
