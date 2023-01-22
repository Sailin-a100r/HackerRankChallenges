/*
 * Complete the 'gradingStudents' function below.
 *
 * The function is expected to return an INTEGER_ARRAY.
 * The function accepts INTEGER_ARRAY grades as parameter.
 */

function gradingStudents(grades) {
    // Write your code here

    let result = []
    grades.forEach(grade => {
        if ( grade < 38) {
            return result.push(grade)
        } else {
            let condition = 5 - (grade % 5); 
            if (condition <= 2 ) {
                grade  = grade + condition
                return result.push(grade)
            } else {
                return result.push(grade)
            }
        }
    });
    return result;
}

"hello".to

// gradingStudents([25, 45, 100, 99, 88, 38, 33, 42, 40, 51, 77, 66])
// gradingStudents([25, 45, 100, 99, 88, 38, 33, 42, 40, 51, 77, 66])
console.log(gradingStudents([25, 45, 100, 99, 88, 38, 33, 42, 40, 51, 77, 66]));