const fs = require("fs");

//sync system
const data = fs.readFileSync("read.txt", "utf-8");
console.log(data);
console.log("after the data");

//async system
fs.readFile("read.txt", "utf-8", (err, data) => {
  console.log(data);
});
console.log("after the data");
