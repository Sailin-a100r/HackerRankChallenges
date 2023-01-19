/*
 * Complete the 'staircase' function below.
 *
 * The function accepts INTEGER n as parameter.
 */

function staircase(n) {
    // Write your code here
    for (let i = 0 ; i < n; i++){
        let j = n - i - 1;
        console.log(" ".repeat(j) + "#".repeat(i+1));
    }
}

staircase(5);
//console.log("#".repeat(20));