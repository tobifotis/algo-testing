// const fizzBuzz = {
//     gpa: 3.4,
// }

function fizzBuzz(number) {
    // if (number % 15 === 0)
    if (number % 3 === 0 && number % 5 === 0) {
        return 'FizzBuzz';
    } else if (number % 3 === 0) {
        return 'Fizz';
    } else if (number % 5 === 0) {
        return 'Buzz';
    } else {
        return number;
    }
}

module.exports = fizzBuzz;
