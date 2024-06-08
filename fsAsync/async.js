//we pass them a function as an argument - a callback -
// that gets called when that task completes.
//the callback has an argument that tells you whether the operationn completed successfully.
//now we need to say what to do when fs.writefile
//has completed(even if it's nothing),and start checking for errors.

const fs = require("fs");

//create file
fs.writeFile("read.txt", "This is async challange", (err) => {
  console.log("file is created.");
  console.log(err);
});

//add txt
fs.appendFile("read.txt", " please learn very seriously.", (err) => {
  console.log("task completed");
});

//read file
fs.readFile("read.txt", "utf-8", (err, data) => {
  console.log(data);
});
