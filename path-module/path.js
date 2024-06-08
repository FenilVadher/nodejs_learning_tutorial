const path = require('node:path');

//to know directory name
console.log(path.dirname('E:/Nodejs_tutorial/nodejs_learning_tutorial/path-module/path.js'));

//to know extention 
console.log(path.extname('E:/Nodejs_tutorial/nodejs_learning_tutorial/path-module/path.js'));

//to know base name 
console.log(path.basename('E:/Nodejs_tutorial/nodejs_learning_tutorial/path-module/path.js'));

//to know whole object 
console.log(path.parse('E:/Nodejs_tutorial/nodejs_learning_tutorial/path-module/path.js'));

//to know only particular thing in our object
const mypath = path.parse('E:/Nodejs_tutorial/nodejs_learning_tutorial/path-module/path.js');
console.log(mypath.name);

