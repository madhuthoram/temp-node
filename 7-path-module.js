const { log } = require("console");
const path = require("path");
console.log(path.sep);

//method for normalise path
const pathName = path.join('content/', 'subfolder', 'text.txt');
console.log(pathName);

//base file of the path
const base = path.basename(pathName);
console.log(base);
//method for absolute path
const absolute = path.resolve(__dirname, 'content', 'subfolder', 'text.txt');
console.log(absolute);