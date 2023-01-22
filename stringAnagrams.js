const solution = (string1, string2) => {
    // Type your solution here
    
    let string1Array = string1.toUpperCase().split("");
    string1 = string1Array.sort().join("")
    console.log(`${string1}`);

    let string2Array = string2.toUpperCase().split("");
    string2 = string2Array.sort().join("")
    console.log(`${string2}`);

    return string1 === string2 ? true : false;
    
};

// solution("anagraM", "grAmAAn");
// solution("anagraM", "grAmAAn");
console.log(solution("anagraM", "grAmAAn"));