

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
    let playerRank = [];
    // let searchIndex = -1 ;

    //const rankedSet = new Set(ranked);
    let rankedArr = ranked;

    for (let i = 0; i < player.length ; i++) {

        // console.log(`1-Ranked Array: ${rankedArr}`);
        // console.log(`-------------------------------`);

        rankedArr.push(player[i])

        let rankedSet = new Set(rankedArr);
        rankedArr = []

        rankedSet.forEach(value => {
            rankedArr.push(value)
        });

        rankedArr.sort((a, b) => b - a)

        // console.log(`Ranked Array: ${rankedArr}`);
        // console.log(`-------------------------------`);

        const place = rankedArr.lastIndexOf(player[i])
        // console.log(`place is: ${place}`);
        // console.log(`-------------------------------`);

        playerRank.push(+place + 1)

        rankedArr.splice(+place, rankedArr.length - +place -2)

        // console.log(`ranked Arr: ${rankedArr}`);
        // console.log(`-------------------------------`);

    }

    return playerRank;

}

let ranked = [100, 100, 50, 40, 40, 20, 10]

let player = [2, 25, 50, 120]

console.log(`${climbingLeaderboard(ranked, player)}`);




