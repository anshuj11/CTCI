function urlify(str) {
    let len = str.length;
    for (i = 0; i < len; i++){
        if (str[i] === " ") {
            str = str.slice(0, i) + "%20" + str.slice(i + 1);
            len += 2;
        }
    }
    return str;
}

console.log(urlify("John Smith"));