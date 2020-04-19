//Node file system (fs) module
//Provides an API for interacting with the file system in a manner closely modeled around stanard POSIX functions
//More information: https://nodejs.org/api/fs.html
const fs = require('fs');
const path = require('path');

//Create folder
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
    if (err) throw err;
    console.log('Folder created');
});

//Create and write to file - overwrites whatever is in the file
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 
'Hello World!',     //What to write to a file
err => {
    if (err) throw err;
    console.log('File written');

    //File append
    fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), 
    'I love Node.js',   //What to append to a file
    err => {
        if (err) throw err;
    console.log('File written');
    });
});

//Read file - will read from hello.txt
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
    if (err) throw err;
    console.log(data);
});

//Rename file
fs.rename(path.join(__dirname, '/test', 'hello.txt'), //What file to rename
path.join(__dirname, '/test', 'hellowrld.txt'),       //What to rename the file
err => {    
    if (err) throw err;
    console.log('File renamed');
});