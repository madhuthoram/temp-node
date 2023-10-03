console.log(__dirname);
console.log(__filename);
const names = require("./1-names");
const sayHi = require("./2-utils");
const data = require("./3-alternative");
require("./4-mind-grenade");
console.log(data.singlePerson);
sayHi("madhu");
sayHi(names.peter);