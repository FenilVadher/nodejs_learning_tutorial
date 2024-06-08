//challenge time

//1 - create a folder named it (your choice)
//2 - create a file in it named bio.txt and if the exixsting data.
//3 - add more data into the file at the end of the exisring data.
//4 - read the data without getting the buffer dsata at first.
//5 - rename the file name to mybio.txt
//6 - now delete both the file and the folder

const fs = require("fs");

//1 - create a folder named it (your choice)
fs.mkdir("Fenil", () => {
  console.log("folder created");
});

//2 - create a file in it named bio.txt and if the exixsting data.
fs.writeFile(
  "./Fenil/bio.txt",
  "hello and welcome to crud operation",
  (err) => {
    console.log("file is created");
  }
);

//3 - add more data into the file at the end of the exisring data.
fs.appendFile("./Fenil/bio.txt", " and plz learn seriously..!", (err) => {
  console.log("data added successfully!");
});

//4 - read the data without getting the buffer dsata at first.
const data = fs.readFileSync("./Fenil/bio.txt", "utf8", (err, data) => {
  console.log(data);
  console.log(err);
});

//5 - rename the file name to mybio.txt
fs.rename("./Fenil/bio.txt", "./Fenil/mybio.txt", (err) => {
  console.log("file name changed successfully!");
});

//6 - now delete both the file and the folder
fs.unlink("./Fenil/mybio.txt", (err) => {
  console.log("file deleted");
});

//fenil folder delete
fs.rmdir("Fenil", (err) => {
  console.log("folder deleted");
});
