function numbersInPi(pi, numbers) {
    // Write your code here.
    let numsHash = {}
    numbers.forEach(el => numsHash[el] = true);
    let cache = {};
    let minSpc = piFinder(pi, numsHash, cache, 0)
    if (minSpc === Number.POSITIVE_INFINITY)
        return -1
    return minSpc

    function piFinder(pi, numsHash, cache, index) {
        console.log("Cache: ", cache);
        if (index === pi.length)
            return -1;
        if (cache[index] > -1)
            return cache[index]
        
        let minSpaces = Number.POSITIVE_INFINITY
        for (let i = index; i < pi.length; i++){
            let str = pi.slice(index, i + 1)
            if (numsHash[str]) {
                // console.log("Str: ", str);
                let minSpacesInSuffix = piFinder(pi, numsHash, cache, i + 1)
                minSpaces = Math.min(minSpaces, minSpacesInSuffix + 1)
            }      
        }
        cache[index] = minSpaces;
        return cache[index]
    }
    
}

// Do not edit the line below.
console.log(numbersInPi("3141592653589793238462643383279", ["314159265358979323846", "26433", "8", "3279", "314159265", "35897932384626433832", "79"]));