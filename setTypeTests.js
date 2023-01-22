

let arr = [1, 1, 2, 23, 454]
let newSet = new Set(arr);
let iterable = newSet.values()
console.log(`${iterable}`);

let newArr =[]
for (const value of iterable) {
    // console.log(`${value}`);
    newArr.push(value)
}
console.log(`${newArr}`);
