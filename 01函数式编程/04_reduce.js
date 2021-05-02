const fs = require("fs");
let output = fs
  .readFileSync("04_data.txt", "utf-8")
  .trim()
  .split("\r\n")
  .map(line => line.split(" "))
  .reduce((customer, line) => {
    customer[line[0]] = customer[line[0]] || [];
    customer[line[0]].push(line.filter(val => val != line[0]));
    return customer;
  }, {});

console.log("output", output);
