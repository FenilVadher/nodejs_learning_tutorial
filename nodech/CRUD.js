//challenge time

//1 - create a folder named it (your choice)
//2 - create a file in it named bio.txt and if the exixsting data.
//3 - add more data into the file at the end of the exisring data.
//4 - read the data without getting the buffer dsata at first.
//5 - rename the file name to mybio.txt
//6 - now delete both the file and the folder

const fs = require("fs");

//1 - create a folder named it (your choice)
fs.mkdirSync('Fenil');

//2 - create a file in it named bio.txt and if the exixsting data.
fs.writeFileSync("Fenil/bio.txt","hello and welcome to crud operation");

//3 - add more data into the file at the end of the exisring data.
fs.appendFileSync("Fenil/bio.txt"," and plz learn seriously..!");

//4 - read the data without getting the buffer dsata at first.
//1- way to convert buffer values to string
// const data = fs.readFileSync("Fenil/bio.txt");
org_data = data.toString();
console.log(org_data);

//2 - way 
const data = fs.readFileSync("Fenil/bio.txt","utf8");
console.log(data);

//5 - rename the file name to mybio.txt
fs.renameSync("Fenil/bio.txt","Fenil/mybio.txt");

//6 - now delete both the file and the folder
fs.unlinkSync("Fenil/mybio.txt");

//fenil folder delete
fs.rmdirSync("Fenil");