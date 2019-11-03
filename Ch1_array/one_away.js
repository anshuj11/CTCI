function oneAway(s1, s2) {
    if (Math.abs(s1.length - s2.length) > 1) return false;
    let one_edit = false;
    //Assuming s1 is the longer string
    for (let i = 0, j=0; i < s1.length; i++, j++){
        if (s1[i] != s2[j] && !one_edit) {
            one_edit = true;
            j--;
        } else if (s1[i] != s2[j] && one_edit) {
            return false;
        }

    }
    return true;
}

console.log(oneAway("pfg", "ple" ))