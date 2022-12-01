const FS = require("fs");

function arrItem() {
  const arr = FS.readFileSync("./input.txt", "utf8").split(/\r?\n/);

  let elf = 0;
  let result = [];
  for (let i = 0; i <= arr.length; i++) {
    if (arr[i] == "") {
      result.push(elf);
      elf = 0;
    } else {
      elf += parseInt(arr[i]);
    }
  }
  return result;
}

const result = arrItem();

  var max = result.reduce(function (a, b) {
    return Math.max(a, b);
  }, -Infinity);

console.log(max);

const topThree = result.sort(function(a, b){return b - a});

console.log(topThree);


