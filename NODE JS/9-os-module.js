const os = require("os");

//   info about the current user
const user = os.userInfo();

//  method returns system uptime in seconds
const time = os.uptime();

const OSInfo = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem(),
};

console.log(OSInfo);