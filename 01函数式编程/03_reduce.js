let numbers = [1, 5, 1, 6, 2, 7];

let sum = numbers.reduce(function (sum, val) {
  return sum + val;
}, 0);

console.log(sum);
