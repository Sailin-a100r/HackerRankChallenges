
/*
 * Complete the 'climbingLeaderboard' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY ranked
 *  2. INTEGER_ARRAY player
 */

function climbingLeaderboard(ranked, player) {
    // Write your code here
    const set = new Set(ranked)
    let result = []

    ranked = [...set]

    player.forEach(element => {
       for (let i = ranked.length-1; i > 0 ; i--) {
                if (ranked[i] == element) {
                    result.push(i + 1)
                    ranked.splice(i)
                    return 
                } else if (ranked[i] > element) {
                    result.push(i+2)
                    ranked.splice(i + 1)
                    return 
                }
        } 
        
        result.push(1);   
    });

    return result;

}
let ranked = [100, 100, 50, 40, 40, 20, 10]

let player = [2, 25, 50, 120]

console.log(`${climbingLeaderboard(ranked, player)}`);




