const os = require("os");
//user info 
const user = os.userInfo();
console.log(user);
// method returns uptime
const upTime = os.uptime();
console.log(`the current uptime of system is ${upTime} seconds`);
const currentOS ={
    name:os.type(),
    release:os.release(),
    totalMemory:os.totalmem(),
    freeMemory:os.freemem()
}
console.log(currentOS);