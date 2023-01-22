/*
 * Complete the 'hurdleRace' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY height
 */

function hurdleRace(k, height) {
    // Write your code here

    let set = new Set(height);
    height = Array.from(set)

    let maxhurdle = Math.max.apply(null, height)
    if (maxhurdle > k) {
        return maxhurdle - k
    } else {
        return 0
    }

}




