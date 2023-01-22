// longest sub string with no repeated characters small != capital




const solution = (s) => {
    // Type your solution here
    let longest = 1;
    let set = new Set()
    for (let i = 0; i < s.length ;) {
        if (set.has(s[i])) {
            longest = longest > set.size ? longest : set.size;
            let arr = [...set]
            i = s.indexOf(s[i], i - set.size) + 1;
            set = new Set()
        } else {
            set.add(s[i])
            i++;
        }  
    }
    return longest > set.size ? longest : set.size;
};


console.log(`${solution("nndNfdfdf")}`);