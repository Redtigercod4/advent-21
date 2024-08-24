const fs = require('fs');

const arr = fs.readFileSync("./input.txt", "utf-8").split(/\r?\n/);
const numberString = [/one/i, /two/i, /three/i, /four/i, /five/i, /six/i, /seven/i, /eight/i, /nine/i];

let firstNumber;
let lastNumber;
let values = [];

for (const item of arr) {
    firstNumber = parseInt(item.match(/\d/)[0]);
    const returnedNumber = item.match(/\d+(?=\D*$)/);
    
    for (const number of returnedNumber) {
        lastNumber = number.charAt(number.length - 1);
    }
    
const sum = firstNumber + lastNumber;
values.push(parseInt(sum));
};

let finalValue = 0;
values.forEach(num => { finalValue += num });

console.log(finalValue);