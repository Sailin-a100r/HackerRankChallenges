/*
 * Complete the 'timeConversion' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts STRING s as parameter.
 */

function timeConversion(s) {
    // Write your code here
    let hour =  parseInt(s[0] + s[1]);
    let AorP = s[s.length - 2].toUpperCase(); 
    if (AorP === "A" && hour === 12) {
        hour = "00";
        return hour + s.slice(2, s.length - 2);
    } else if (AorP === "P" && hour !== 12){
        hour = hour + 12; 
        return newTime + s.slice(2, s.length-2);
    } else {
        return s.slice(0, s.length - 2);
    }
}

let s = '12:40:22AM';
console.log(timeConversion(s));