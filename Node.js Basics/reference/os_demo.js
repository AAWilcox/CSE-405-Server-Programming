//Node os module
//Gives information about environment and OS
//More information: https://nodejs.org/api/os.html
const os = require('os');

//Platform (windows, mac, ...)
console.log(os.platform());

//CPU Archtecture
console.log(os.arch());

//CPU Core Info
console.log(os.cpus());

//Free memory
console.log(os.freemem());

//Total memory
console.log(os.totalmem());

//Home director
console.log(os.homedir());

//Uptime
console.log(os.uptime());