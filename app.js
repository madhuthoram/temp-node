// nom --version
 // local dependency - use it only in this particular project
 // pm i <packageName>

// global dependency - use it in any project
// npm install -g <packageName>
// sudo pm install -g <packageName> (mac)

 // package. json - manifest file (stores important info about project/package) ' / manual approach (create package. json in the root, create properties etc)
 // pm init (step by step, press enter to skip)
 // pm init -y (everything default)

 const _ = require('lodash');
 const arr = [2,[3,[4,[5]]]];
 const flatArr = _.flatMapDeep(arr);
 console.log(flatArr);