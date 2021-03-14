// this is a function declarion!

function calcSquared1 (number1, number2) {
    const calcFirst = Math.pow(number1,2);
    const calcSecond = Math.pow(number2,2);
    const sum = calcFirst + calcSecond;
    const sumSquared = Math.pow(sum,2);
    return sumSquared;
} 

console.log(calcSquared1(7,5));

// this is a function expression!

const calcSquared2 = function (number1, number2) {
    const calcFirst = Math.pow(number1,2);
    const calcSecond = Math.pow(number2,2);
    const sum = calcFirst + calcSecond;
    const sumSquared = Math.pow(sum,2);
    return sumSquared;
};

console.log(calcSquared2(8,5));

// This is a arrow function!

const calcSquared3 = (number1, number2) => {
    const calcFirst = Math.pow(number1,2);
    const calcSecond = Math.pow(number2,2);
    const sum = calcFirst + calcSecond;
    const sumSquared = Math.pow(sum,2);
    return sumSquared;
};

console.log(calcSquared3(3,5));