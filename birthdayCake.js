/*
 * Complete the 'birthdayCakeCandles' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts INTEGER_ARRAY candles as parameter.
 */

function birthdayCakeCandles(candles) {
    // Write your code here
    //candles.sort((a, b) => b - a);
    //console.log(candles);
    let blow = 1;
    for (let i = 1; i <= candles.length; i++) {
        //console.log(candles);
        if (candles[0] === candles[i]) {
            //console.log(i)
            blow++;
            //console.log(blow);
        } else {
            console.log('blow');
            return blow;
        }
    }
}

let candles = [];
//candles.sort((a, b) => a-b)
//console.log(candles)

for (let i = 0; i < 100000; i++) {
    candles.push(9999999);
}
console.log();
birthdayCakeCandles(candles);