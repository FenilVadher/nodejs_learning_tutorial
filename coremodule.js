// const name = "Fenil";
// console.log(name);

const fs = require("fs");

// creating a new file 
// fs.writeFileSync("read.txt","welcome to nodejs tutorial");
// fs.writeFileSync("read.txt","Fenil Vadher, welcome to nodejs tutorial"); //over ride the previous one
// fs.appendFileSync("read.txt", " How are you all..!"); //not override the previous one instend of it will add new

// const buf_data = fs.readFileSync("read.txt");
// org_data = buf_data.toString();
// console.log(org_data);

fs.renameSync("read.txt","readwrite.txt");
