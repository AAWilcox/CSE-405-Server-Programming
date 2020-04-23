//=-=-=-=-=-= Process =-=-=-=-=-=
//Provides information about Node.js processes
//More information at: https://nodejs.org/dist/latest-v12.x/docs/api/process.html

const process = require('process');

//Forcing a process to exit
let counter = 0;
setInterval( () => {
    counter++;
    if (counter === 10){
        console.log(counter);
        //Signals our script to exit
        process.exit();
    }
}, 100);

//Print to console with process
process.stdout.write('Hello!');

//Get command line agruments
const command = process.argv[2];
console.log(`Third command line argument: ${command}`);

//Warning event
//Warning event will be emitted whenever Node.js emits a warning
process.on('warning', (warning) => {
    console.warn(warning.name);
    console.warn(warning.message);
});
