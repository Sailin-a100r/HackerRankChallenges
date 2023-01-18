
function diagonalDifference(arr) {
    // Write your code here
    
    let main = 0, sec = 0;
    
    for (let i = 0; i < arr.length; i++) {
        main += arr[i][i];
        console.log(arr[i][i]);
    }
    //console.log(main);
    let reversed = arr.reverse();
    //console.log(reversed);
    for (let i = 0; i < reversed.length; i++) {
        sec += reversed[i][i];
    }
    //console.log(sec);
    return Math.abs(main - sec);
}


let arr = [[11, 2, 4], [4, 5, 6], [10, 8, -12]];
console.log(diagonalDifference(arr));