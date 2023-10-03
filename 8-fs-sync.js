const {readFileSync, writeFileSync} = require("fs");
console.log("start");
const first = readFileSync('./content/first.txt', 'utf8');
const second = readFileSync('./content/second.txt', 'utf8');
console.log(first);
console.log(second);
writeFileSync('./content/result-sync.txt',
`here is result: ${first}, ${second}`,
{flag:'a'});
console.log(readFileSync('./content/result-sync.txt','utf8'));
console.log("done with this task");
console.log("starting next task");