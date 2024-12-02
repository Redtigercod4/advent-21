const fs = require('fs');

const arr = fs.readFileSync("./input.txt", "utf-8").split(/\r?\n/);

// Format data into nested array
const nestedArr = arr.map((a) => a.split("   "));

// Iterate over the array
let arr1 = [];
let arr2 = [];

for (let i = 0; i < nestedArr.length; i++) {
    arr1.push(nestedArr[i][0]);
    arr2.push(nestedArr[i][1]);
}

arr1.sort((a, b) => {
    return a - b
});

arr2.sort((a, b) => {
    return a - b
})


function totalDistanceDifference() {
    let output = [];
    let minLength = Math.min(arr1.length, arr2.length);

    for (let i = 0; i < minLength; i++) {
        if (arr1[i] > arr2[i]) {
            output.push(arr1[i] - arr2[i]);
        } else {
            output.push(arr2[i] - arr1[i]);
        }
    }

    // Add up total of array and output
    const sum = output.reduce((total, current) => total + current, 0);

    return sum;
}

function similarity() {
    let output = [];
    // For Each number in arr1, iterate over arr2 and return amount of times matched. 
    arr1.forEach((a) => {
        let value = 0;
        for (let i = 0; i < arr2.length; i++) {
            if (a === arr2[i]) {
                value++
            }
        }
        output.push(a * value);
    })
    // Take total matches and mulitple by number in arr1

    // If number does not match, return zero.

    // Store number in output arr and add up for answer
    const sum = output.reduce((total, current) => total + current, 0);
    return sum;
}

console.log(`Part 1: ${totalDistanceDifference()}`);
console.log(`Part 2: ${similarity()}`)