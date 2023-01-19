/*
 * Complete the 'miniMaxSum' function below.
 *
 * The function accepts INTEGER_ARRAY arr as parameter.
 */

function miniMaxSum(arr) {
    // Write your code here
    arr.sort((a, b) => a - b)
    let mini = arr.reduce((acc, val) => acc + val) - arr[4];
    let max = arr.reduce((acc, val) => acc + val) - arr[0];

    console.log(mini + ' ' + max);

}

let array = [12, 5, 56, 8, 2];
//array.sort((a, b) => a - b);
//console.log(array);

miniMaxSum(array);