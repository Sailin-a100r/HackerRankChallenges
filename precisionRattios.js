


function plusMinus(arr) {
    // Write your code here
    let positive = 0;
    let negative = 0;
    let zeros = 0;
    arr.map((value)=> {
        //value > 0 ? positive++ :0;
       // value < 0 ? negative++ :0;
       // value === 0 ? zeros++ :0;

       if (value > 0){
        positive++;
       } else if (value < 0) {
        negative++;
       } else {zeros++;}
    })

    let sum = positive + negative + zeros;
    console.log((positive/sum).toPrecision(6));
    console.log((negative/sum).toPrecision(6));
    console.log((zeros/sum).toPrecision(6));
}

plusMinus([1, 2, 5, -1, -8, 0]);