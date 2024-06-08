const os = require("os");

//to know architecture
console.log(os.arch());

//to know hostname
console.log(os.hostname());

//to know platform
console.log(os.platform());

//to know temp directory
console.log(os.tmpdir());

//to know os type in our system
console.log(os.type());

// to know memory
const freememory = os.freemem();
// console.log(freememory);
console.log(`${freememory / 1024 / 1024 / 1024}`);

//to know total memory
const totalmemory = os.totalmem();
console.log(`${totalmemory / 1024 / 1024 / 1024}`);
